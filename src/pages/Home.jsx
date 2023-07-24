import Footer from './Footer'
import classes from './Home.module.scss'

const Home = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.hero}>
          <a className={classes.version} href="">
            <strong>New in v5.3</strong>
            <span>Color mode support, expanded color palette, and more!</span>
          </a>
          <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap" width="200" height="165" />
          <h1>Build fast, responsive sites with Bootstrap</h1>
          <p className={classes.lead}>
            Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins
          </p>

          <div className={classes.install_info}>
            <div className={classes.install_info_ct}>
              <div className={classes.install}>
                <div className={classes.highlight}>
                  <pre>
                    <code>
                      <span className={classes.line}>
                        <span className={classes.cl}>npm i bootstrap@5.3.0</span>
                      </span>
                    </code>
                  </pre>
                </div>
                <div className={classes.clipboard}>
                  <button className={classes.btn_clipboard}><i className='bi bi-clipboard'></i></button>
                </div>
              </div>
            </div>
            <a className={classes.read}> <i className='bi bi-book-half'></i> <span>Read the docs</span></a>
          </div>
          <p className={classes.links}>
            Currently
            <strong>v5.3.0</strong>
            <span>.</span>
            <a href="">Download</a>
            <span>.</span>
            <a href="">v4.6.x docs</a>
            <span>.</span>
            <a href="">All releases</a>
          </p>
          <div className={classes.ads}>
            {/* <img src="https://cdn4.buysellads.net/uu/1/134955/1685040243-designdotdev2-1.jpg" alt="ads via Carbon" border="0" height="100" width="130" style={{ maxWidth: "130px" }} /> */}
            <div className={classes.logo_d}>
              <div className={classes.logo_d_in}>
                <div className={classes.logo_d_in_bord1}></div>
                <div className={classes.logo_d_in_bord2}></div>
              </div>
            </div>
            <div className={classes.paragraphs}>
              <p>Design and Development tips in your inbox. Every weekday.</p>
              <p>ads via Carbon</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.hero2}>
          <div className={classes.icon}><i className='bi bi-code'></i></div>
          <h2>Get started any way you want</h2>
          <p>
            Jump right into building with Bootstrap—use the CDN, install it via package manager, or download the source code.
          </p>
          <p className={classes.link_read_install}>
            <a href="">Read installation docs</a>
            <i className='bi bi-arrow-right'></i>
          </p>
        </div>
      </div>
      <div className={classes.way}>
        <section className={classes.getstarted}>
          <div className={classes.package}>
            <i className='bi bi-box-seam'></i>
            <h2>Install via package manager</h2>
            <p>Install Bootstrap’s source Sass and JavaScript files via npm, RubyGems, Composer, or Meteor. Package managed installs don’t include documentation or our full build scripts. You can also <a href="">use any demo from our Examples repo</a> to quickly jumpstart Bootstrap projects.</p>
            <div className={classes.install}>
              <div className={classes.highlight}>
                <pre>
                  <code>
                    <span className={classes.line}>
                      <span className={classes.cl}>npm i bootstrap@5.3.0</span>
                    </span>
                  </code>
                </pre>
              </div>
              <div className={classes.clipboard}>
                <button className={classes.btn_clipboard}><i className='bi bi-clipboard'></i></button>
              </div>
            </div>
            <div className={classes.install}>
              <div className={classes.highlight}>
                <pre>
                  <code>
                    <span className={classes.line}>
                      <span className={classes.cl}>gem install bootstrap -v 5.3.0</span>
                    </span>
                  </code>
                </pre>
              </div>
              <div className={classes.clipboard}>
                <button className={classes.btn_clipboard}><i className='bi bi-clipboard'></i></button>
              </div>
            </div>
            <p><a href="">Read our installation docs</a> for more info and additional package managers.</p>
          </div>
          <div className={classes.cdn}>
            <i className='bi bi-globe2'></i>
            <h2>Include via CDN</h2>
            <p>When you only need to include Bootstrap’s compiled CSS or JS, you can use <a href="jsDelivr"></a>. See it in action with our simple <a href="">quick start</a>, or <a href="">browse the examples</a> to jumpstart your next project. You can also choose to include Popper and our JS <a href="">separately</a>.</p>
            <div className={classes.install}>
              <div className={classes.highlight}>
                <pre>
                  <code>
                    <span className={classes.line}>
                      <span className={classes.cl}>
                        {`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>`}
                      </span>
                    </span>
                  </code>
                </pre>
              </div>
              <div className={classes.clipboard}>
                <button className={classes.btn_clipboard}><i className='bi bi-clipboard'></i></button>
              </div>
            </div>
            <div className={classes.install}>
              <div className={classes.highlight}>
                <pre>
                  <code>
                    <span className={classes.line}>
                      <span className={classes.cl}>
                        {`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>`}
                      </span>
                    </span>
                  </code>
                </pre>
              </div>
              <div className={classes.clipboard}>
                <button className={classes.btn_clipboard}><i className='bi bi-clipboard'></i></button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className={classes.guides}>
        <h2 className={classes.guides_h2}>Read our getting started guides</h2>
        <p className={classes.guides_p}>Get a jump on including Bootstrap's source files in a new project with our official guides.</p>
        <div className={classes.guides_brands}>
          <a href="" className={classes.guides_brands_link}>
            <img className={classes.guides_brands_link_img} src="https://getbootstrap.com/docs/5.3/assets/img/webpack.svg" alt="" width="72" height="72" loading="lazy" />
            <span className={classes.guides_brands_link_span} >Webpack</span>
          </a>
          <a href="" className={classes.guides_brands_link}>
            <img className={classes.guides_brands_link_img} src="https://getbootstrap.com/docs/5.3/assets/img/parcel.png" alt="" width="72" height="72" loading="lazy" />
            <span className={classes.guides_brands_link_span} >Parcel</span>
          </a>
          <a href="" className={classes.guides_brands_link}>
            <img className={classes.guides_brands_link_img} src="	https://getbootstrap.com/docs/5.3/assets/img/vite.svg" alt="" width="72" height="72" loading="lazy" />
            <span className={classes.guides_brands_link_span} >Vite</span>
          </a>
        </div>
      </section>
      <section className={classes.customSass}>
        <div className="">
          <div className={classes.customSass_icon}>
            <i className='bi bi-palette2'></i>
          </div>
          <h1 className={classes.customSass_h1}>Customize everything with Sass</h1>
          <p className={classes.customSass_p}>Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and write your own CSS with our variables, maps, functions, and mixins.</p>
          <p className={classes.customSass_link_read_install}>
            <a href="">Learn more about customizing</a>
            <i className='bi bi-arrow-right'></i>
          </p>
        </div>
        <div className={classes.sass}>
          <section className={classes.getstarted}>
            <div className={classes.package}>
              <h2>Include all of Bootstrap’s Sass</h2>
              <p>Import one stylesheet and you're off to the races with every feature of our CSS.</p>
              <div className={classes.install}>
                <div className={classes.highlight}>
                  <pre>
                    <code>
                      <span className={classes.line}>
                        <span className={classes.cl}>
                          <p className={classes.comment}>{`// Variable overrides first`}</p>
                          <p><span className={classes.variables}>{`$primary: `}</span><span className={classes.values}>{`#900`}</span>;</p>
                          <p><span className={classes.variables}>{`$enable-shadows: `}</span><span className={classes.values}>{`true`}</span>;</p>
                          <p><span className={classes.variables}>{`$prefix: `}</span><span className={classes.values}>{`"mo-"`}</span>;</p>
                          <p><br /></p>
                          <p className={classes.comment}>{`// Then import Bootstrap`}</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/bootstrap"`}</span>;</p>
                        </span>
                      </span>
                    </code>
                  </pre>
                </div>
                <div className={classes.clipboard}>
                  <button className={classes.btn_clipboard}><i className='bi bi-clipboard'></i></button>
                </div>
              </div>
              <p>Learn more about our <a href="">global Sass options.</a> </p>
            </div>
            <div className={classes.cdn}>
              <h2>Include what you need</h2>
              <p>The easiest way to customize Bootstrap—include only the CSS you need.</p>
              <div className={classes.install}>
                <div className={classes.highlight}>
                  <pre>
                    <code>
                      <span className={classes.line}>
                        <span className={classes.cl}>
                          <p className={classes.comment}>{`// Functions first`}</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/functions"`}</span>;</p>
                          <p><br /></p>
                          <p className={classes.comment}>{`// Then import Bootstrap`}</p>
                          <p><span className={classes.variables}>{`$primary: `}</span><span className={classes.values}>{`#900`}</span>;</p>
                          <p><span className={classes.variables}>{`$enable-shadows: `}</span><span className={classes.values}>{`true`}</span>;</p>
                          <p><span className={classes.variables}>{`$prefix: `}</span><span className={classes.values}>{`"mo-"`}</span>;</p>
                          <p><br /></p>
                          <p className={classes.comment}>{`// Required Bootstrap imports`}</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/variables"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/variables-dark"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/maps"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/mixins"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/root"`}</span>;</p>
                          <p><br /></p>
                          <p className={classes.comment}>{`// Optional components`}</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/utilities"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/reboot"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/containers"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/grid"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/helpers"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/utilities/api"`}</span>;</p>
                        </span>
                      </span>
                    </code>
                  </pre>
                </div>
                <div className={classes.clipboard}>
                  <button className={classes.btn_clipboard}><i className='bi bi-clipboard'></i></button>
                </div>
              </div>
              <p>Learn more about <a href="">using Bootstrap with Sass.</a> </p>
            </div>
          </section>
        </div>
      </section>
      <section className={classes.cssvars}>
        <div className="">
          <div className={classes.cssvars_icon}>
            <i className='bi bi-braces'></i>
          </div>
          <h1 className={classes.cssvars_h1}>Build and extend in real-time with CSS variables</h1>
          <p className={classes.cssvars_p}>
            Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. We provide dozens of variables for colors, font styles, and more at a :root level for use anywhere. On components and utilities, CSS variables are scoped to the relevant class and can easily be modified.
          </p>
          <p className={classes.cssvars_link_read_install}>
            <a href="">Learn more about CSS variables</a>
            <i className='bi bi-arrow-right'></i>
          </p>
        </div>
        <div className={classes.css}>
          <section className={classes.getstarted}>
            <div className={classes.package}>
              <h2>Using CSS variables</h2>
              <p className={classes.p}>Use any of our <a href='' className={classes.variables}>global :root variables</a> to write new styles. CSS variables use <br /> <code className={classes.code}>var(--bs-variableName)</code> syntax and can be inherited by children elements.</p>
              <div className={classes.install}>
                <div className={classes.highlight}>
                  <pre>
                    <code>
                      <span className={classes.line}>
                        <span className={classes.cl}>
                          <p className={classes.comment}>{`// Variable overrides first`}</p>
                          <p><span className={classes.variables}>{`$primary: `}</span><span className={classes.values}>{`#900`}</span>;</p>
                          <p><span className={classes.variables}>{`$enable-shadows: `}</span><span className={classes.values}>{`true`}</span>;</p>
                          <p><span className={classes.variables}>{`$prefix: `}</span><span className={classes.values}>{`"mo-"`}</span>;</p>
                          <p><br /></p>
                          <p className={classes.comment}>{`// Then import Bootstrap`}</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/bootstrap"`}</span>;</p>
                        </span>
                      </span>
                    </code>
                  </pre>
                </div>
                <div className={classes.clipboard}>
                  <button className={classes.btn_clipboard}><i className='bi bi-clipboard'></i></button>
                </div>
              </div>
              <p>Learn more about our <a href="">global Sass options.</a> </p>
            </div>
            <div className={classes.cdn}>
              <h2>Customizing via CSS variables</h2>
              <p>Override global, component, or utility class variables to customize Bootstrap just how you like. No need to redeclare each rule, just a new variable value.</p>
              <div className={classes.install}>
                <div className={classes.highlight}>
                  <pre>
                    <code>
                      <span className={classes.line}>
                        <span className={classes.cl}>
                          <p className={classes.comment}>{`// Functions first`}</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/functions"`}</span>;</p>
                          <p><br /></p>
                          <p className={classes.comment}>{`// Then import Bootstrap`}</p>
                          <p><span className={classes.variables}>{`$primary: `}</span><span className={classes.values}>{`#900`}</span>;</p>
                          <p><span className={classes.variables}>{`$enable-shadows: `}</span><span className={classes.values}>{`true`}</span>;</p>
                          <p><span className={classes.variables}>{`$prefix: `}</span><span className={classes.values}>{`"mo-"`}</span>;</p>
                          <p><br /></p>
                          <p className={classes.comment}>{`// Required Bootstrap imports`}</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/variables"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/variables-dark"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/maps"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/mixins"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/root"`}</span>;</p>
                          <p><br /></p>
                          <p className={classes.comment}>{`// Optional components`}</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/utilities"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/reboot"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/containers"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/grid"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/helpers"`}</span>;</p>
                          <p><span className={classes.import}>{`@import `}</span><span className={classes.values}>{`"../node_modules/bootstrap/scss/utilities/api"`}</span>;</p>
                        </span>
                      </span>
                    </code>
                  </pre>
                </div>
                <div className={classes.clipboard}>
                  <button className={classes.btn_clipboard}><i className='bi bi-clipboard'></i></button>
                </div>
              </div>
              <p>Learn more about <a href="">using Bootstrap with Sass.</a> </p>
            </div>
          </section>
        </div>
      </section>
      <section className={classes.bsicon}>
        <div className="">
          <div className={classes.bsicon_icon}>
            <i className="bi bi-app-indicator"></i>
          </div>
          <h1 className={classes.bsicon_h1}>Personalize it with Bootstrap Icons</h1>
          <p className={classes.bsicon_p}>
            Bootstrap Icons is an open source SVG icon library featuring over 1,800 glyphs, with more added every release. They're designed to work in any project, whether you use Bootstrap itself or not. Use them as SVGs or icon fonts—both options give you vector scaling and easy customization via CSS.</p>
          <p className={classes.bsicon_link_read_install}>
            <a href="">Get Bootstrap Icons</a>
            <i className='bi bi-arrow-right'></i>
          </p>
        </div>
        <div className={classes.css}>
          <img className="img-fluid mt-3 mx-auto" src="	https://getbootstrap.com/docs/5.3/assets/img/bootstrap-icons.png" alt="Bootstrap Icons" width="700" height="425" loading="lazy" />
        </div>
      </section>
      <section className={classes.themes}>
        <div className="">
          <div className={classes.themes_icon}>
            <i className="bi bi-droplet-fill"></i>
          </div>
          <h1 className={classes.themes_h1}>Make it yours with official Bootstrap Themes</h1>
          <p className={classes.themes_p}>
          Take Bootstrap to the next level with premium themes from the official Bootstrap Themes marketplace. Themes are built on Bootstrap as their own extended frameworks, rich with new components and plugins, documentation, and powerful build tools.</p>
          <p className={classes.themes_link_read_install}>
            <a href="">Browse Bootstrap Themes</a>
            <i className='bi bi-arrow-right'></i>
          </p>
        </div>
        <div className={classes.css}>
          <img className="img-fluid mt-3 mx-auto" src="https://getbootstrap.com/docs/5.3/assets/img/bootstrap-themes.png" alt="Bootstrap Icons" width="700" height="425" loading="lazy" />
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Home