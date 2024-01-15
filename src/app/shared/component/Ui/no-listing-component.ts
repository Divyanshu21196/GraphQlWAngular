import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
    selector: 'app-no-listing',
    template: `<div class="container">
                    <div class="row">
                        <h3>No Listing Found !....</h3>
                    </div>
                </div>`,
    styles: [``]
})


export class AppNoListing implements OnInit {
    constructor() { }
    ngOnInit(): void {
    }

}