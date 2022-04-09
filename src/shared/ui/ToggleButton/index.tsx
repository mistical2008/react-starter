import { Button } from 'antd'

type Props = {
    isOn: boolean
    onClick: () => void
    toggledText?: string
    untoggledText?: string
    style?: React.CSSProperties
}

function ToggleButton({
    isOn,
    onClick,
    toggledText = 'Stop',
    untoggledText = 'Start',
    style,
}: Props) {
    return (
        <Button
            type={isOn ? 'default' : 'primary'}
            shape="round"
            size="large"
            onClick={onClick}
            style={style}
        >
            {isOn ? toggledText : untoggledText}
        </Button>
    )
}

export { ToggleButton }
