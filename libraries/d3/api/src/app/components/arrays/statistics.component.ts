import { Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: "staticstics",
  template: `
    <h2>{{ 'D3 > Array > Staticstics' }}</h2>
    <div>Sample Data: {{ exampleData }}</div>

    <h3>d3.min(array[, accessor]):</h3>
    <hr>
    <button (click)="min()">Normal</button>
    <button (click)="minEmpty()">With empty array</button>
    <button (click)="minWithAccessor()">With accessor</button>

    <h3>d3.max(array[, accessor]):</h3>
    <hr>
    <button (click)="max()">Normal</button>
    <button (click)="maxEmpty()">With empty array</button>
    <button (click)="maxWithAccessor()">With accessor</button>

    <h3>d3.extent(array[, accessor]):</h3>
    <hr>
    <button (click)="extent()">Normal</button>
    <button (click)="extentEmpty()">With empty array</button>
    <button (click)="extentWithAccessor()">With accessor</button>

    <h3>d3.sum(array[, accessor]):</h3>
    <hr>
    <button (click)="sum()">Normal</button>
    <button (click)="sumEmpty()">With empty array</button>
    <button (click)="sumWithAccessor()">With accessor</button>

    <h3>d3.mean(array[, accessor]):</h3>
    <hr>
    <button (click)="mean()">Normal</button>
    <button (click)="meanEmpty()">With empty array</button>
    <button (click)="meanWithAccessor()">With accessor</button>

    <h3>d3.median(array[, accessor]):</h3>
    <hr>
    <button (click)="median()">Normal</button>
    <button (click)="medianEmpty()">With empty array</button>
    <button (click)="medianWithAccessor()">With accessor</button>

    <h3>d3.quantile(array, p, [, accessor]):</h3>
    <hr>
    <button (click)="quantile()">Normal</button>
    <button (click)="quantileWithAccessor()">With accessor</button>
  `
})
export class StaticsticsComponent {
  exampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  min() {
    console.log(d3.min(this.exampleData));
  }

  minEmpty() {
    console.log(d3.min([]));
  }

  minWithAccessor() {
    console.log(d3.min(this.exampleData, d => 'Mapped ' + d));
  }

  max() {
    console.log(d3.max(this.exampleData));
  }

  maxEmpty() {
    console.log(d3.max([]));
  }

  maxWithAccessor() {
    console.log(d3.max(this.exampleData, d => 'Mapped ' + d));
  }

  extent() {
    console.log(d3.extent(this.exampleData));
  }

  extentEmpty() {
    console.log(d3.extent([]));
  }

  extentWithAccessor() {
    console.log(d3.extent(this.exampleData, d => 'Mapped ' + d));
  }

  sum() {
    console.log(d3.sum(this.exampleData));
  }

  sumEmpty() {
    console.log(d3.sum([null, undefined]));
  }

  sumWithAccessor() {
    console.log('Accessor will add 1 for each before computing the sum');
    console.log(d3.sum(this.exampleData, d => d + 1));
  }

  mean() {
    console.log(d3.mean(this.exampleData));
  }

  meanEmpty() {
    console.log(d3.mean([null, undefined]));
  }

  meanWithAccessor() {
    console.log('Accessor will add 10 for each before computing the mean');
    console.log(d3.mean(this.exampleData, d => d + 10));
  }

  median() {
    console.log(d3.median(this.exampleData));
  }

  medianEmpty() {
    console.log(d3.median([]));
  }

  medianWithAccessor() {
    console.log('Accessor will add 2 for each before computing the median');
    console.log(d3.median(this.exampleData, d => d + 2));
  }

  quantile() {
    console.log('p = undefined => quantile = ' + d3.quantile(this.exampleData));
    console.log('p = 0.25 => quantile = ' + d3.quantile(this.exampleData, 0.25));
    console.log('p = 0.75 => quantile = ' + d3.quantile(this.exampleData, 0.75));
  }

  quantileWithAccessor() {
    console.log('Accessor will add 2 for each before computing the quantile');
    console.log('p = 0.25 => quantile = ' + d3.quantile(this.exampleData, 0.25, d => d + 2));
    console.log('p = 0.75 => quantile = ' + d3.quantile(this.exampleData, 0.75, d => d + 2));
  }
}

