package org.nem.ncc.controller;

import net.minidev.json.*;
import org.hamcrest.core.*;
import org.junit.*;
import org.mockito.*;
import org.nem.core.connect.HttpPostRequest;
import org.nem.core.connect.client.NisApiId;
import org.nem.core.crypto.*;
import org.nem.core.model.*;
import org.nem.core.model.ncc.*;
import org.nem.core.serialization.*;
import org.nem.ncc.connector.PrimaryNisConnector;
import org.nem.ncc.controller.requests.*;
import org.nem.ncc.controller.viewmodels.PartialTransferInformationViewModel;
import org.nem.ncc.exceptions.NisException;
import org.nem.ncc.services.TransactionMapper;
import org.nem.ncc.test.*;

public class TransactionControllerTest {

	//region sendTransaction

	@Test
	public void sendTransactionDelegatesToTransactionMapper() {
		// Arrange:
		final TestContext context = new TestContext();
		final Transaction model = new MockTransaction(Utils.generateRandomAccount(), 7);
		final Deserializer deserializer = this.getNisRequestResultDeserializer(ValidationResult.SUCCESS.getValue());
		Mockito.when(context.transactionMapper.toModel(context.request)).thenReturn(model);
		Mockito.when(context.connector.post(Mockito.any(), Mockito.any())).thenReturn(deserializer);

		// Act:
		context.controller.sendTransaction(context.request);

		// Assert:
		Mockito.verify(context.transactionMapper, Mockito.times(1)).toModel(context.request);
	}

	@Test
	public void sendTransactionDelegatesToNisTransactionAnnounce() {
		// Arrange:
		final TestContext context = new TestContext();
		final MockTransaction model = new MockTransaction(Utils.generateRandomAccount(), 7);
		final Deserializer deserializer = this.getNisRequestResultDeserializer(ValidationResult.SUCCESS.getValue());
		Mockito.when(context.transactionMapper.toModel(context.request)).thenReturn(model);
		Mockito.when(context.connector.post(Mockito.any(), Mockito.any())).thenReturn(deserializer);

		// Act:
		context.controller.sendTransaction(context.request);

		final ArgumentCaptor<HttpPostRequest> requestCaptor = ArgumentCaptor.forClass(HttpPostRequest.class);
		Mockito.verify(context.connector, Mockito.times(1)).post(Mockito.eq(NisApiId.NIS_REST_TRANSACTION_ANNOUNCE), requestCaptor.capture());
		final JSONObject jsonRequest = (JSONObject)JSONValue.parse(requestCaptor.getValue().getPayload());
		final RequestAnnounce requestAnnounce = new RequestAnnounce(new JsonDeserializer(jsonRequest, null));

		// Assert:
		final byte[] serializedModelBytes = BinarySerializer.serializeToBytes(model.asNonVerifiable());
		final Signature expectedSignature = new Signer(model.getSigner().getKeyPair()).sign(serializedModelBytes);
		Assert.assertThat(requestAnnounce.getData(), IsEqual.equalTo(serializedModelBytes));
		Assert.assertThat(requestAnnounce.getSignature(), IsEqual.equalTo(expectedSignature.getBytes()));
	}

	@Test(expected = NisException.class)
	public void sendTransactionWithNisRequestResultErrorThrowsException() {
		// Arrange:
		final TestContext context = new TestContext();
		final Transaction model = new MockTransaction(Utils.generateRandomAccount(), 7);
		final Deserializer deserializer = this.getNisRequestResultDeserializer(ValidationResult.FAILURE_TIMESTAMP_TOO_FAR_IN_PAST.getValue());
		Mockito.when(context.transactionMapper.toModel(context.request)).thenReturn(model);
		Mockito.when(context.connector.post(Mockito.any(), Mockito.any())).thenReturn(deserializer);

		// Act:
		context.controller.sendTransaction(context.request);
	}

	//endregion

	//region validateTransferData

	@Test
	public void validateTransferDataDelegatesToTransactionMapper() {
		// Arrange:
		final TestContext context = new TestContext();
		final PartialTransferInformationRequest request = Mockito.mock(PartialTransferInformationRequest.class);
		final PartialTransferInformationViewModel originalViewModel = Mockito.mock(PartialTransferInformationViewModel.class);
		Mockito.when(context.transactionMapper.toViewModel(request)).thenReturn(originalViewModel);

		// Act:
		final PartialTransferInformationViewModel viewModel = context.controller.validateTransferData(request);

		// Assert:
		Mockito.verify(context.transactionMapper, Mockito.only()).toViewModel(request);
		Assert.assertThat(viewModel, IsSame.sameInstance(originalViewModel));
	}

	//endregion

	//region remote harvest

	// TODO 20141005: it probably makes sense to have pairs of tests (unlock/lock)
	// > consider having a helper function that each part of the pair can delegate to
	// > something like: assertDelegatesToTransactionMapper(BiFunction<controller, harvestRequest>, ImportanceTransferTransaction.Mode)

	@Test
	public void remoteUnlockDelegatesToTransactionMapper() {
		// Arrange:
		final TestContext context = new TestContext();
		final Transaction model = new MockTransaction(Utils.generateRandomAccount(), 7);
		final Deserializer deserializer = this.getNisRequestResultDeserializer(ValidationResult.SUCCESS.getValue());
		Mockito.when(context.transactionMapper.toModel(context.harvestRequest, ImportanceTransferTransaction.Mode.Activate)).thenReturn(model);
		Mockito.when(context.connector.post(Mockito.any(), Mockito.any())).thenReturn(deserializer);

		// Act:
		context.controller.remoteUnlock(context.harvestRequest);

		// Assert:
		Mockito.verify(context.transactionMapper, Mockito.times(1)).toModel(context.harvestRequest, ImportanceTransferTransaction.Mode.Activate);
	}

	@Test
	public void remoteUnlockDelegatesToNisTransactionAnnounce() {
		// Arrange:
		final TestContext context = new TestContext();
		final MockTransaction model = new MockTransaction(Utils.generateRandomAccount(), 7);
		final Deserializer deserializer = this.getNisRequestResultDeserializer(ValidationResult.SUCCESS.getValue());
		Mockito.when(context.transactionMapper.toModel(context.harvestRequest, ImportanceTransferTransaction.Mode.Activate)).thenReturn(model);
		Mockito.when(context.connector.post(Mockito.any(), Mockito.any())).thenReturn(deserializer);

		// Act:
		context.controller.remoteUnlock(context.harvestRequest);

		final ArgumentCaptor<HttpPostRequest> requestCaptor = ArgumentCaptor.forClass(HttpPostRequest.class);
		Mockito.verify(context.connector, Mockito.times(1)).post(Mockito.eq(NisApiId.NIS_REST_TRANSACTION_ANNOUNCE), requestCaptor.capture());
		final JSONObject jsonRequest = (JSONObject)JSONValue.parse(requestCaptor.getValue().getPayload());
		final RequestAnnounce requestAnnounce = new RequestAnnounce(new JsonDeserializer(jsonRequest, null));

		// Assert:
		final byte[] serializedModelBytes = BinarySerializer.serializeToBytes(model.asNonVerifiable());
		final Signature expectedSignature = new Signer(model.getSigner().getKeyPair()).sign(serializedModelBytes);
		Assert.assertThat(requestAnnounce.getData(), IsEqual.equalTo(serializedModelBytes));
		Assert.assertThat(requestAnnounce.getSignature(), IsEqual.equalTo(expectedSignature.getBytes()));
	}

	@Test
	public void remoteLockDelegatesToNisTransactionAnnounce() {
		// Arrange:
		final TestContext context = new TestContext();
		final MockTransaction model = new MockTransaction(Utils.generateRandomAccount(), 7);
		final Deserializer deserializer = this.getNisRequestResultDeserializer(ValidationResult.SUCCESS.getValue());
		Mockito.when(context.transactionMapper.toModel(context.harvestRequest, ImportanceTransferTransaction.Mode.Deactivate)).thenReturn(model);
		Mockito.when(context.connector.post(Mockito.any(), Mockito.any())).thenReturn(deserializer);

		// Act:
		context.controller.remoteLock(context.harvestRequest);

		final ArgumentCaptor<HttpPostRequest> requestCaptor = ArgumentCaptor.forClass(HttpPostRequest.class);
		Mockito.verify(context.connector, Mockito.times(1)).post(Mockito.eq(NisApiId.NIS_REST_TRANSACTION_ANNOUNCE), requestCaptor.capture());
		final JSONObject jsonRequest = (JSONObject)JSONValue.parse(requestCaptor.getValue().getPayload());
		final RequestAnnounce requestAnnounce = new RequestAnnounce(new JsonDeserializer(jsonRequest, null));

		// Assert:
		final byte[] serializedModelBytes = BinarySerializer.serializeToBytes(model.asNonVerifiable());
		final Signature expectedSignature = new Signer(model.getSigner().getKeyPair()).sign(serializedModelBytes);
		Assert.assertThat(requestAnnounce.getData(), IsEqual.equalTo(serializedModelBytes));
		Assert.assertThat(requestAnnounce.getSignature(), IsEqual.equalTo(expectedSignature.getBytes()));
	}

	//endregion

	private Deserializer getNisRequestResultDeserializer(final int code) {
		final MockAccountLookup accountLookup = new MockAccountLookup();
		final NemRequestResult result = new NemRequestResult(
				NemRequestResult.TYPE_VALIDATION_RESULT,
				code,
				"RESULT_STRING");
		final JsonSerializer serializer = new JsonSerializer();
		result.serialize(serializer);

		return new JsonDeserializer(serializer.getObject(), new DeserializationContext(accountLookup));
	}

	private static class TestContext {
		private final TransactionMapper transactionMapper = Mockito.mock(TransactionMapper.class);
		private final PrimaryNisConnector connector = Mockito.mock(PrimaryNisConnector.class);
		private final TransferSendRequest request = Mockito.mock(TransferSendRequest.class);
		private final TransferImportanceRequest harvestRequest = Mockito.mock(TransferImportanceRequest.class);
		private final TransactionController controller = new TransactionController(this.transactionMapper, this.connector);
	}
}