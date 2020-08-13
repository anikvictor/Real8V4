import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                   Copyright &copy;{(new Date().getFullYear())}
            </footer>

        )
    }
}
