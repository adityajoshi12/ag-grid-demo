import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  private gridApi;
  private gridColumnApi;
  style;

  columnDefs = [
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Username", field: "userName" ,sortable: true,filter: true},
    { headerName: "Email", field: "email", sortable: true,filter: true },
    { headerName: "Phone", field: "phone" },
    { headerName: "Account", field: "account" },
    { headerName: "Amount", field: "amount" },
    { headerName: "Job Area", field: "jobArea" },
    { headerName: "Job Title", field: "jobTitle" },
    { headerName: "Address", field: "address" },
    { headerName: "Country", field: "countryCode" }
  ];

  rowData;
  constructor(private http: HttpClient) {
    this.http
      .get(
        "https://gist.githubusercontent.com/adityajoshi12/c34b7915d20be01af060e108759cd506/raw/6a36dae1318fce2693e95227c589572f8aada72f/data.json"
      )
      .subscribe(data => {
        console.log(data);
        this.rowData = data;
      });
  }

 
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });

    params.api.sizeColumnsToFit();
    this.style = {
      width: "100%",
      height: "100vh",
      boxSizing: "border-box"
    };
  }
}
