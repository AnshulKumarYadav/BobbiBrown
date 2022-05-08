function navbar()
{
    return `
    <div class="navbar">
        <div>
            <h3 onclick="window.location.href='/BobbiBrown/html/signIn.html'">EMAIL SIGNUP</h3>
        </div>
        <div >
        <a href="/BobbiBrown/index.html"> <img  src="https://www.bobbibrowncosmetics.com/media/export/cms/logo.png" alt="logo"></a>
        </div>
        <div class = "navbar">
            <h3>Join BBACCESS</h3>
            <div>
            <span class="material-symbols-outlined">add_location</span>
            <span class="material-symbols-outlined" onclick="window.location.href='/BobbiBrown/html/account.html'">person</span>
            <a href=
            "/BobbiBrown/html/cart.html"><span class="material-symbols-outlined">shopping_bag</span></a>
            </div>
        </div>
    </div>
    <div class="navbar" id="div2">
        <div id="search-box">
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder="SEARCH" id="search">
        </div>
        <h3><a href="/BobbiBrown/html/new.html">New</a></h3>
        <h3><a href="/BobbiBrown/html/new.html">BestSeller</a></h3>
        <h3> <a href="/BobbiBrown/html/skincare.html">Face</a></h3>
        <h3> <a href="/BobbiBrown/html/skincare.html">Makeup</a></h3>
        <h3> <a href="/BobbiBrown/html/skincare.html">Skincare</a></h3>
        <h3>Virtual Services</h3>
        <h3>Discover</h3>
    </div>

    `
}

export {navbar};
