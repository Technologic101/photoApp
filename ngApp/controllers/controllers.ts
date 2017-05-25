namespace photos.Controllers {

  export class HomeController {
      public file;
      public photos;

      public pickFile() {
          this.filepickerService.pick(
              { mimetype: 'image/*' },
              this.fileUploaded.bind(this)
          );
      }

      public fileUploaded(file) {
          this.file = file;
          this.$scope.$apply(); // force page to update
      }

      public savePhoto() {
        this.photoService.save(this.file).then( () => {
          this.photos = this.photoService.list();
          this.$state.go('home');
        })
      }

      public remove(id) {
        this.photoService.remove(id).then(() => {
          this.photos = this.photoService.list();
          this.$state.go('home');
        });
      }

      constructor(private filepickerService,
                  private $scope: ng.IScope,
                  private photoService:photos.Services.PhotoService,
                  private $state:ng.ui.IStateService,
                 ) {
          this.photos = photoService.list();
      }
  }

  export class EditController {
    public photo;
    private id;

    private getPhoto() {
      this.photo = this.photoService.get(this.id);
      console.log(this.photo._id);
    }

    public savePhoto() {
      this.photo.id = this.id;
      this.photoService.save(this.photo).then( () => {
        this.$state.go('home');
      })
    }

    constructor(private filepickerService,
                private $scope: ng.IScope,
                private photoService:photos.Services.PhotoService,
                private $state:ng.ui.IStateService,
                private $stateParams:ng.ui.IStateParamsService
) {
        this.id = $stateParams['id'];
        this.getPhoto();
    }
  }

  angular.module('photos').controller('HomeController', HomeController);

  angular.module('photos').controller('EditController', EditController);

}
