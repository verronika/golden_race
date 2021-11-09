import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';


describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sub message', () => {
    service.currentMessage.subscribe((message:any)=>{
      if(message===false){
        expect(message).toEqual(false);
      }else{
        expect(message).toEqual("test");
      }
    })
    service.changeMessage("test")
  });

  it('sub clear', () => {
    service.currentClear.subscribe((clear:any)=>{
      if(clear===false){
        expect(clear).toEqual(false);
      }else{
        expect(clear).toEqual("test");
      }
    })
    service.changeMessage("test")
  });

  
});
