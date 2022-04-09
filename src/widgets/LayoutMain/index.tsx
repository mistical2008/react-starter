import { Layout, Typography } from 'antd'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { ToggleButton } from 'src/shared/ui'

const { Header, Content } = Layout

type Props = {
    children?: React.ReactNode
    headerTitle?: React.ReactNode | string
}

function LayoutMain({ headerTitle }: Props) {
    const [started, setStarted] = useState(false)
    return (
        <>
            <Layout style={{ minHeight: '100vh', height: '100%' }}>
                <Layout
                    hasSider
                    style={{
                        minHeight: '100vh',
                    }}
                >
                    <Header
                        style={{
                            position: 'fixed',
                            zIndex: 10,
                            width: '100%',
                            display: 'flex',
                            alignItems: 'space-between',
                        }}
                    >
                        <Typography.Title style={{ color: '#fff' }} level={1}>
                            {headerTitle
                                ? headerTitle
                                : 'React SPA starter template'}
                        </Typography.Title>
                        <ToggleButton
                            style={{ marginLeft: 'auto' }}
                            isOn={started}
                            onClick={() => setStarted(!started)}
                        />
                    </Header>
                    <Content
                        style={{
                            padding: '0 50px',
                            margin: '64px auto 0',
                            backgroundColor: '#ffffff',
                            minHeight: 'calc(100vh - 64px)',
                            height: '100%',
                            maxWidth: '1170px',
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export { LayoutMain }
