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
          console.log('hi from remove callback');
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
    public file;
    private id;

    private getPhoto() {
      this.file = this.photoService.get({id: this.id});
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
