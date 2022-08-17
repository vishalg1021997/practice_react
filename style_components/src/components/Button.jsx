import React from 'react'
import { CustomButton } from './ButtonCss'

const Button = () => {

    return (
        <div style={{ margin: 25 }}>
            <CustomButton btnText={'Primary'}>Primary Button</CustomButton>
            <CustomButton btnText={'Default'}>Default Button</CustomButton>
            <CustomButton btnText={'Dashed'}>Dashed Button</CustomButton>
            <CustomButton btnText={'Text'}>Text Button</CustomButton>
            <CustomButton btnText={'Link'}>Link Button</CustomButton>
        </div>
    )
}

export { Button }