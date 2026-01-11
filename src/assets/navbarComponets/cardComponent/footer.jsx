import React from 'react'
function Footer(){
    return(
<section className='footer' id='footer'>
    <div className='ft'>
        <h1>quick-links</h1>
        <div className='links'>
        <a href="#home">home</a>
        <a href="#contact">contact</a>
        <a href="#about">about</a>
        <a href="#service">service</a>
        <a href="#product">product</a>
        </div>
    </div>
    <div className='sub'>
        <div className='sb'>
        <h1>sub-links</h1>
        <a href="#docs">Docs</a>
        <a href="#status">Status</a>
        <a href="#support">Support</a>
        <a href="#developer">developer guides</a>
        <a href="#agent">Agents experience</a>
    </div>
    </div>
    <div className='social'>
        <div className='media'>
        <h1>social-media</h1>
        <a href="https://www.youtube.com/@evaristebapfekurera5995">you tube</a>
        <a href="https://www.facebook.com/evariste.arrogent.ever">facebook</a>
        <a href="https://www.instagram.com/evari_ste2025/">instagram</a>
        <a href="https://www.linkedin.com/in/evariste-bapfekurera-a3700b2b0/">linkedin</a>
        <a href="https://x.com/EBapfekure3">twitter</a>
    </div>
    </div>
    <hr />
    <div className='form'>
        <form action="">
            <div className='fr'>
                <h1>Stay up to date with Ebcodes news</h1>
                <input type="text"  id="form" required />
                <button type='submit'>--▶</button>
            </div>
        </form>
    </div>
    <hr />
    <section className='aft'>
        <div className='other'>
            <div className='cook'>
            <a href="">trust center</a>
            <a href="">privacy</a>
            <a href="">abuse</a>
            <a href="">cookie setting</a>
        </div>
        </div>
        <div className='fter'>
            <div className='sett'>
                <p>©evariste🍁 leaf 2026</p>
                <select id='system'>
                    <option value="">system</option>
                    <option value="">dark</option>
                    <option value="">light</option>
                </select>
            </div>
        </div>
    </section>
</section>
    )
}
export default Footer