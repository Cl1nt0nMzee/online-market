import './_index.scss'

export const PrimaryButton = ({ text, size }) => {
    return (
        <button className="primary" type="button">
        {text}
        </button>
    );
}

export const SecondaryButton = () => {
    return (
        <button className="secondary" type="button">
        Secondary Button
        </button>
    );
}

export const TertiaryButton = () => {
    return (
        <button className="tertiary" type="button">
        Tertiary Button
        </button>
    );
}

// export { PrimaryButton, SecondaryButton, TertiaryButton }