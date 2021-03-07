const containerStyle = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

const headerStyle = {
    fontSize: '100px',
    color: '#EB3D80'
};

const textStyle = {
    fontSize: '40px',
};

export default function Custom404() {
    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>404</h1>
            <p style={textStyle}>There is nothing :(</p>
        </div>
    )
}