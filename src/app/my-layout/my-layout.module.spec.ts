import { MyLayoutModule } from './my-layout.module';

describe('MyLayoutModule', () => {
  let myLayoutModule: MyLayoutModule;

  beforeEach(() => {
    myLayoutModule = new MyLayoutModule();
  });

  it('should create an instance', () => {
    expect(myLayoutModule).toBeTruthy();
  });
});
