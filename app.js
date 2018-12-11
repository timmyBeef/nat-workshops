(function () {
    var app = angular.module("app", []);

    app.controller('appController', function ($scope, $filter) {
        var articles = [
            {
                title: "How to build webapps that scale",
                slug: "zp7yqc",
                body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
                createdAt: "2018-05-11T21:58:27.358Z",
                updatedAt: "2018-05-11T21:58:27.358Z",
                tagList: [],
                description: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
                author: {
                    username: "Eliseo@gardner.biz",
                    bio: "Eliseo",
                    image: "/assets/img/N4VcUeJ.jpg",
                    following: false
                },
                favorited: false,
                favoritesCount: 1
            },
            {
                title: "quo vero reiciendis velit similique earum",
                slug: "p3vcsw",
                body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
                createdAt: "2018-05-11T21:55:00.722Z",
                updatedAt: "2018-05-11T21:55:00.722Z",
                tagList: [],
                description: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
                author: {
                    username: "Jayne_Kuhic@sydney.com",
                    bio: "Jayne_Kuhic",
                    image: "/assets/img/Qr71crq.jpg",
                    following: false
                },
                favorited: false,
                favoritesCount: 3
            },
            {
                title: "odio adipisci rerum aut animi",
                slug: "3c69lg",
                body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
                createdAt: "2018-05-11T19:49:35.917Z",
                updatedAt: "2018-05-11T19:49:35.917Z",
                tagList: [],
                description: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
                author: {
                    username: "Lew@alysha.tv",
                    bio: "Lew",
                    image: "/assets/img/cat.jpg",
                    following: false
                },
                favorited: false,
                favoritesCount: 5
            },
            {
                title: "dolore omnis vol odio adipisci rerum aut animi",
                slug: "3c69lg",
                body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
                createdAt: "2018-05-11T19:49:35.917Z",
                updatedAt: "2018-05-11T19:49:35.917Z",
                tagList: [],
                description: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
                author: {
                    username: "Lew@alysha.tv",
                    bio: "Lew",
                    image: "/assets/img/cat.jpg",
                    following: false
                },
                favorited: false,
                favoritesCount: 5
            }
        ];
        $scope.list = angular.copy(articles);

        $scope.title = 'NTA';
        $scope.subtitle = 'National Treasury Administration, Ministry of Finance';
        $scope.showTitle = true;

        $scope.search = function () {
            $scope.list = $filter('filter')(articles, $scope.keyword.title);
        }

    });

    app.filter('itemFilter', function () {
        return function (input) {
            switch (input) {
                case "01":
                    return "01-公保";
                    break;
                case "02":
                    return "02-勞保";
                    break;
                case "03":
                    return "03-勞工退休金";
                    break;
                case "04":
                    return "04-健保";
                    break;
                case "05":
                    return "05-退撫基金";
                    break;
                default:
                    return "全部";
            }
        };
    });
})();
