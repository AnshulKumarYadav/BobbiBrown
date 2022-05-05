function navbar()
{
    return `
    <div class="navbar">
        <div>
            <h3 onclick="window.location.href='/BobbiBrown/html/signIn.html'">EMAIL SIGNUP</h3>
        </div>
        <div>
            <img src="https://www.bobbibrowncosmetics.com/media/export/cms/logo.png" alt="logo">
        </div>
        <div class = "navbar">
            <h3>Join BBACCESS</h3>
            <div>
            <span class="material-symbols-outlined">add_location</span>
            <span class="material-symbols-outlined" onclick="window.location.href='/BobbiBrown/html/signIn.html'">person</span>
            <a href=
            "/BobbiBrown/html/cart.html"><span class="material-symbols-outlined">shopping_bag</span></a>
            </div>
        </div>
    </div>
    <div class="navbar" style="margin-top:20px">
        <div id="search-box">
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder="SEARCH" id="search">
        </div>
        <h3><a href="../html/new.html">New</a></h3>
        <h3><a href="./html/new.html">BestSeller</a></h3>
        <h3>Face</h3>
        <h3>Makeup</h3>
        <h3>Skincare</h3>
        <h3>Virtual Services</h3>
        <h3>Discover</h3>
    </div>

    `
}


export {navbar};