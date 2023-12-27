"use client";

import TOKENS from "@app/tokens";
import Button from "@app/layouts/Button";
import Heading from "@app/layouts/Heading";
import Input from "@app/layouts/Input";
import InputRow from "@app/layouts/InputRow";
import Row from "@app/layouts/Row";
import Select from "@app/layouts/Select";
import Spacer from "@app/layouts/Spacer";
import Text from "@app/layouts/Text";
import TextArea from "@app/layouts/TextArea";
import styled from "styled-components";
import useForm from "@app/hooks/useForm";
import MessageText from "@app/layouts/MessageText";
import { isEmpty } from "@app/functions";

const StyledWrapper = styled.section`
	margin: 2rem auto;
	max-width: 1024px;

	background-color: #ffffff;
	padding: 5rem;
`;

const StyledSideBar = styled.aside`
	width: 300px;
	border-left: 0.5px solid #c5c5c5;

	p {
		margin: 0 0 2rem 0;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}

	p.selected {
		color: #2237ff;
		font-weight: 600;
		border-left: 2px solid #2237ff;
	}
`;

const StyledContent = styled.div`
	width: calc(100% - 100px);
	//border: 1px solid grey;
`;

const StyledKitNameRow = styled(Row)`
	max-width: 400px;
	align-items: center;

	div:first-child {
		width: 150px;
		font-weight: bold;
	}
`;

function VideoOutro() {
	const { values, errors, setValues, resetErrors, onSubmit } = useForm({
		defaultValues: { textareaCta: "", selectCta: "0" },
		callback,
		validate,
	});

	function handleChange(event) {
		event.preventDefault();
		const { name = "", value = "" } = event.target;

		if (name === "textareaCta" && !isEmpty(value)) {
			setValues({ selectCta: "0" });
		}

		setValues({ [name]: value });
	}

	async function callback({ textareaCta, selectCta }) {
		resetErrors();

		try {
			const cta = !isEmpty(textareaCta) ? textareaCta : selectCta;

			const res = fetch("/api", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},

				body: JSON.stringify({ cta }),
			});

			console.log(res);
		} catch (error) {}
	}

	function validate(values) {
		const errors = {};

		if (isEmpty(values.textareaCta) && values.selectCta === "0") {
			errors.textareaCta = "Please select or enter an action text.";
		}
		return errors;
	}

	return (
		<StyledWrapper>
			<StyledKitNameRow>
				<div>
					<Text>Brand kit name</Text>
				</div>

				<div>
					<Input />
				</div>
			</StyledKitNameRow>

			<Spacer height={TOKENS.spacing.s32} />
			<Spacer height={TOKENS.spacing.s32} />

			<Row>
				<StyledSideBar>
					<Text>Texts</Text>
					<Text>Logo</Text>
					<Text className="selected">Outro</Text>
					<Text>Custom brand kit</Text>
				</StyledSideBar>

				<StyledContent>
					<Heading>Outro</Heading>
					<InputRow>
						<div>
							<label htmlFor="selectCta">Call to action</label>
						</div>

						<div>
							<Select
								name="selectCta"
								value={values.selectCta}
								onChange={handleChange}
							>
								<option value="0">Select</option>
								<option value="Listen on Spotify">
									Listen on Spotify
								</option>
								<option value="Listen on Apple">
									Listen on Apple
								</option>
								<option value="Listen on Google">
									Listen on Google
								</option>
							</Select>
						</div>
					</InputRow>

					<Spacer height={TOKENS.spacing.s32} />

					<InputRow>
						<div>
							<label htmlFor="textareaCta">
								Custom call to action
							</label>
						</div>

						<div>
							<TextArea
								name="textareaCta"
								value={values.textareaCta}
								onChange={handleChange}
								placeholder="The Mst Amazing Podcast Ever!"
								maxLength="20"
							></TextArea>
						</div>
					</InputRow>

					<Spacer height={TOKENS.spacing.s16} />
					<MessageText variant="error">
						{errors.textareaCta}
					</MessageText>
					<Spacer height={TOKENS.spacing.s32} />

					<Button onClick={onSubmit}>Save</Button>
				</StyledContent>
			</Row>
		</StyledWrapper>
	);
}

export default VideoOutro;
