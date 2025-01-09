document.addEventListener("DOMContentLoaded", function () {
            function loadPage(hash) {
                const page = hash ? hash.substring(1) : "home";
                const url = `${page}.html`;

                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Page not found");
                        }
                        return response.text();
                    })
                    .then(data => {
                        document.querySelector("#content").innerHTML = data;
                        updateLanguage();
                    })
                    .catch(error => {
                        document.querySelector("#content").innerHTML = "<h1>Page not found</h1>";
                        console.error("Error loading page:", error);
                    });
            }

            // Lắng nghe sự kiện thay đổi hash
            window.addEventListener("hashchange", function () {
                loadPage(window.location.hash);
            });

            // Tải trang ban đầu dựa vào hash
            loadPage(window.location.hash);
        });