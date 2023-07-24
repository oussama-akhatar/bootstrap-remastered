import classes from './Footer.module.scss'

const Footer = () => {
    return (
        <>
            <footer className={classes.footer}>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <a className={classes.brand} href="/" aria-label="Bootstrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" style={{ display: "block", margin: "0.25rem 0" }} viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
                            <span>Bootstrap</span>
                        </a>
                        <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
                        <p>Code licensed MIT, docs CC BY 3.0.</p>
                        <p>Currently v5.3.0.</p>
                    </div>
                    <div className={classes.col}>
                        <h5>Links</h5>
                        <ul>
                            <li>Home</li>
                            <li>Docs</li>
                            <li>Examples</li>
                            <li>Icons</li>
                            <li>Themes</li>
                            <li>Blog</li>
                            <li>Swag Store</li>
                        </ul>
                    </div>
                    <div className={classes.col}>
                        <h5>Guides</h5>
                        <ul>
                            <li>Getting started</li>
                            <li>Starter template</li>
                            <li>Examples</li>
                            <li>Webpack</li>
                            <li>Parcel</li>
                            <li>Vite</li>
                        </ul>
                    </div>
                    <div className={classes.col}>
                        <h5>Projects</h5>
                        <ul>
                            <li>Bootstrap 5</li>
                            <li>Bootstrap 4</li>
                            <li>Icons</li>
                            <li>RFS</li>
                            <li>Examples repo</li>
                        </ul>
                    </div>
                    <div className={classes.col}>
                        <h5>Community</h5>
                        <ul>
                            <li>Issues</li>
                            <li>Discussions</li>
                            <li>Corporate sponsors</li>
                            <li>Open Collective</li>
                            <li>Stack Overflow</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer