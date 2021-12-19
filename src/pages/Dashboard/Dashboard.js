import React from 'react';
import AddService from '../AddService/AddService';
import ManageBooking from '../ManageBooking/ManageBooking';
import MyBooking from '../MyBooking/MyBooking';
import ReviewPage from '../Review/ReviewPage';

const Dashboard = () => {
    return (
        <div>
      <h1>DashBoard</h1>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="manageBooking-tab"
            data-bs-toggle="tab"
            data-bs-target="#manageBooking"
            type="button"
            role="tab"
            aria-controls="manageBooking"
            aria-selected="true"
          >
           ManageBooking
          </button>
        </li>

        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="mybooking-tab"
            data-bs-toggle="tab"
            data-bs-target="#mybooking"
            type="button"
            role="tab"
            aria-controls="mybooking"
            aria-selected="false"
          >
            My Booking
          </button>
        </li>

        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="addService-tab"
            data-bs-toggle="tab"
            data-bs-target="#addService"
            type="button"
            role="tab"
            aria-controls="addService"
            aria-selected="false"
          >
            Add Service
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="review-tab"
            data-bs-toggle="tab"
            data-bs-target="#review"
            type="button"
            role="tab"
            aria-controls="review"
            aria-selected="false"
          >
            Review
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="manageBooking"
          role="tabpanel"
          aria-labelledby="manageBooking-tab"
        >
          <ManageBooking></ManageBooking>
        </div>

        <div
          class="tab-pane fade"
          id="mybooking"
          role="tabpanel"
          aria-labelledby="mybooking-tab"
        >
          <MyBooking></MyBooking>
        </div>

        <div
          class="tab-pane fade"
          id="addService"
          role="tabpanel"
          aria-labelledby="addService-tab"
        >
          <AddService></AddService>
        </div>
        <div
          class="tab-pane fade"
          id="review"
          role="tabpanel"
          aria-labelledby="review-tab"
        >
          <ReviewPage></ReviewPage>
        </div>
      </div>
    </div>
    );
};

export default Dashboard;