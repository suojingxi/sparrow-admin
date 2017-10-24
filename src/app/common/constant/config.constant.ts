import { Headers } from '@angular/http';

const ConfigConstant = Object.freeze({
  HostUser : 'http://127.0.0.1:8080/',
  headers : new Headers({'Content-Type': 'application/json'}),
  pageSize : 10
});
export default ConfigConstant;
