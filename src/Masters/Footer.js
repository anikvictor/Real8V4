import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                   Real8 - Copyright &copy;{(new Date().getFullYear())} - All Rights Reserved.
            </footer>

        )
    }
}
