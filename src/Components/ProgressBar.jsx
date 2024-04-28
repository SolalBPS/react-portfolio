import '../Style/App.css';
function ProgressBar() {
    // Source: W3Schools
    const onScroll = () => {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    }

    window.onscroll = onScroll;

    return (
        <>
            <div class="progress-container">
                <div class="progress-bar bg-danger" id="progressBar"></div>
            </div>
        </>
    );
}

export default ProgressBar;
