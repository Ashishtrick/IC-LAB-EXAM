import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar';

function About() {


  return (
    <>
    <Navbar />
    <div class="accordion" id="chapters">
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading-1">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#chapter-1"
          aria-expanded="true"
          aria-controls="chapter-1"
        >
          Organization name?
        </button>
      </h2>
      <div
        id="chapter-1"
        class="accordion-collapse collapse show"
        aria-labelledby="heading-1"
        data-bs-parent="#chapters"
      >
        <div class="accordion-body">
          <p>
            travell incoporated pvt.ltd
          </p>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header" id="heading-2">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#chapter-2"
          aria-expanded="true"
          aria-controls="chapter-2"
        >
          Address Location?
        </button>
      </h2>
      <div
        id="chapter-2"
        class="accordion-collapse collapse"
        aria-labelledby="heading-2"
        data-bs-parent="#chapters"
      >
        <div class="accordion-body">
          <p>
            23-jump street, hyderabad, India
          </p>
        </div>
      </div>
    </div>

  <div class="accordion-item">
      <h2 class="accordion-header" id="heading-3">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#chapter-3"
          aria-expanded="true"
          aria-controls="chapter-3"
        >
          Duration of orders?
        </button>
      </h2>
      <div
        id="chapter-3"
        class="accordion-collapse collapse"
        aria-labelledby="heading-3"
        data-bs-parent="#chapters"
      >
        <div class="accordion-body">
          <p>
            trip planning takes 2-3 days
          </p>
        </div>
      </div>
    </div>

  <div class="accordion-item">
      <h2 class="accordion-header" id="heading-4">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#chapter-4"
          aria-expanded="true"
          aria-controls="chapter-4"
        >
          Contact Details?
        </button>
      </h2>
      <div
        id="chapter-4"
        class="accordion-collapse collapse"
        aria-labelledby="heading-4"
        data-bs-parent="#chapters"
      >
        <div class="accordion-body">
          <p>
            Email us at travell@hotmail.com
            
          </p>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default About;
