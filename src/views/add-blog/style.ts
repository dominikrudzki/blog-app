import styled from "styled-components"

export const FormWrapper = styled.div`
	padding: 1.5em;
	border: 1px solid var(--font-gray);
	border-radius: 15px;
`

export const FormInputBox = styled.div`
	margin: .5em 0 1.5em;
	position: relative;

	label {
		color: var(--font-white);
		font-weight: 600;
		display: block;
	}

	button {
		background-color: unset;
		font-size: 18px;
		border: 1px solid var(--font-white);
		border-radius: 15px;
		padding: .5em 2em;
		margin: 2em auto 0;
		display: block;
		cursor: pointer;
	}

	label, input, textarea, button {
		color: var(--font-white);
	}

	input, textarea {
		box-sizing: border-box;
		width: 100%;
		font-size: 16px;
		background-color: unset;
		padding: .5em;
		border: none;
		border-bottom: 1px solid var(--font-gray);
	}
`

export const FormError = styled.span`
	color: #c02727;
	position: absolute;
	right: 0;
`
