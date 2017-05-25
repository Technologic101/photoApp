var photos;
(function (photos) {
    var Services;
    (function (Services) {
        var PhotoService = (function () {
            function PhotoService($resource) {
                this.PhotoResource = $resource('/api/photos/:id');
            }
            PhotoService.prototype.get = function (id) {
                return this.PhotoResource.get({ id: id });
            };
            PhotoService.prototype.list = function () {
                return this.PhotoResource.query();
            };
            PhotoService.prototype.save = function (photo) {
                return this.PhotoResource.save(photo).$promise;
            };
            PhotoService.prototype.remove = function (id) {
                return this.PhotoResource.delete({ id: id }).$promise;
            };
            return PhotoService;
        }());
        Services.PhotoService = PhotoService;
        angular.module('photos').service('photoService', PhotoService);
    })(Services = photos.Services || (photos.Services = {}));
})(photos || (photos = {}));
