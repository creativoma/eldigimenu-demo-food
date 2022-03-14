export const componenteScroll = () =>{
    let mybutton = document.getElementById("btn-top");

    document.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            mybutton.classList = "active";
        } else {
            mybutton.classList = "inactive";
        }
    }
}