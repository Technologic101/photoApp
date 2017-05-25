var photos;
(function (photos) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(filepickerService, $scope, photoService, $state) {
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.photoService = photoService;
                this.$state = $state;
                this.photos = photoService.list();
            }
            HomeController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'image/*' }, this.fileUploaded.bind(this));
            };
            HomeController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.$scope.$apply();
            };
            HomeController.prototype.savePhoto = function () {
                var _this = this;
                this.photoService.save(this.file).then(function () {
                    _this.photos = _this.photoService.list();
                    _this.$state.go('home');
                });
            };
            HomeController.prototype.remove = function (id) {
                var _this = this;
                this.photoService.remove(id).then(function () {
                    console.log('hi from remove callback');
                    _this.photos = _this.photoService.list();
                    _this.$state.go('home');
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var EditController = (function () {
            function EditController(filepickerService, $scope, photoService, $state, $stateParams) {
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.photoService = photoService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.id = $stateParams['id'];
                this.getPhoto();
            }
            EditController.prototype.getPhoto = function () {
                this.file = this.photoService.get({ id: this.id });
            };
            return EditController;
        }());
        Controllers.EditController = EditController;
        angular.module('photos').controller('HomeController', HomeController);
        angular.module('photos').controller('EditController', EditController);
    })(Controllers = photos.Controllers || (photos.Controllers = {}));
})(photos || (photos = {}));
