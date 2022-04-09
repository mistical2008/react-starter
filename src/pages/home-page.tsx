import { Button, Space, Typography } from 'antd'
import { useState } from 'react'

function HomePage() {
    const [count, setCount] = useState(0)

    return (
        <Space
            direction="vertical"
            align="center"
            style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                minHeight: '80vh',
                height: '100%',
            }}
        >
            <Typography>
                <h1>Hello World!</h1>
                <p>This is a React SPA-app starter.</p>
                <p>
                    <b>Libs</b>
                    <ul>
                        <li>
                            UI: <code>Antd</code>
                        </li>
                        <li>
                            Icons: <code>react-icons</code>
                        </li>
                        <li>
                            REST: <code>axios</code>
                        </li>
                        <li>
                            Server cache: <code>react-query</code>
                        </li>
                        <li>
                            Websockets: <code>socket.io</code>
                        </li>
                        <li>
                            Icons: <code>react-icons</code>
                        </li>
                        <li>
                            FP (algebraic data types, typeclasses):{' '}
                            <code>fp-ts</code>
                        </li>
                    </ul>
                    <ul>
                        <b>Code quality</b>
                        <li>
                            Types: <code>tyescript</code>
                        </li>
                        <li>
                            Code style: <code>prettier</code>
                            {', '}
                            <code>eslint</code>
                        </li>
                        <li>
                            Bundler: <code>vite</code>
                        </li>
                        <li>
                            <ul>
                                <b>Testing</b>
                                <li>
                                    tests: <code>vitest</code>
                                </li>
                                <li>
                                    Comonents testing: <code>storybook</code>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <b>Organization methodology</b>
                        <li>
                            <p>
                                <code>feature-sliced</code>
                            </p>
                        </li>
                    </ul>
                </p>
                <p>
                    You can find the source code for this app on{' '}
                    <a
                        href="https://github.com/mistical2008/react-starter"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    .
                </p>
                <p>
                    <Space direction="horizontal">
                        <Button
                            type="primary"
                            onClick={() => setCount(count + 1)}
                        >
                            Click me!
                        </Button>
                        <Button onClick={() => setCount(0)}>Reset count</Button>
                        <span>{count}</span>
                    </Space>
                </p>
            </Typography>
        </Space>
    )
}

export default HomePage
