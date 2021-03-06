/**
 * DateTimePicker format Sample
 */
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Calendar } from '@syncfusion/ej2-calendars';

@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class <%= classify(name) %>Component {
  public date: Object = new Date();
  public placeholder: string ="Select a date and time";
  public format: string = 'dd-MMM-yy';
  @ViewChild('datetimepick')
  public datetimeObj: Calendar;
  changeFormat() {
    let dateFormat: string = (document.getElementById('dateformats') as HTMLSelectElement).value;
    this.format = dateFormat;
    this.datetimeObj.dataBind();
  }
}