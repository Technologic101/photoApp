namespace photos.Services {

  export class PhotoService {
    private PhotoResource;

    public get(id) {
      return this.PhotoResource.get({id:id});
    }

    public list() {
      return this.PhotoResource.query()
    }

    public save(photo) {
      return this.PhotoResource.save(photo).$promise;
    }

    public remove(id) {
      return this.PhotoResource.delete({id:id}).$promise;
    }


    constructor($resource: ng.resource.IResourceService) {
        this.PhotoResource = $resource('/api/photos/:id');
    }
  }

  angular.module('photos').service('photoService', PhotoService);

}
