<template>
  <section id="faq" class="blog-area pt-115">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <div class="section-title text-center" style="visibility: visible">
            <h6 class="sub-title">Frequently Asked Questions</h6>
          </div>
        </div>
      </div>
      <!-- row -->
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-6 col-sm-8">
          <div class="single-blog mt-30" style="visibility: visible">
            <div class="blog-content">
              <h4 class="blog-title">Where is data coming from?</h4>
              <div class="blog-author d-flex align-items-center">
                <div class="author-content media-body">
                  <p class="text">
                    Currency data delivered are sourced from financial data
                    providers and banks, including the European Central Bank.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-8">
          <div class="single-blog mt-30" style="visibility: visible">
            <div class="blog-content">
              <h4 class="blog-title">Can I convert currencies?</h4>
              <div class="blog-author d-flex align-items-center">
                <div class="author-content media-body">
                  <p class="text">
                    Currency conversion is supported via a separate API endpoint
                    and can be used to convert any amount from one currency to
                    another.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-8">
          <div class="single-blog mt-30" style="visibility: visible">
            <div class="blog-content">
              <h4 class="blog-title">
                Which type of historical rates does the API offer?
              </h4>
              <div class="blog-author d-flex align-items-center">
                <div class="author-content media-body">
                  <p class="text">
                    The API delivers EOD / End of Day historical exchange rates,
                    which become available at 00:05am GMT for the previous day
                    and are time stamped at one second before midnight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-8">
          <div class="single-blog mt-30" style="visibility: visible">
            <div class="blog-content">
              <h4 class="blog-title">What is the API's uptime?</h4>
              <div class="blog-author d-flex align-items-center">
                <div class="author-content media-body">
                  <p class="text">
                    The API has had an uptime of 99.99% throughout the last 12
                    months. You can review the current status anytime on the
                    Status Page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-8">
          <div class="single-blog mt-30" style="visibility: visible">
            <div class="blog-content">
              <h4 class="blog-title">Rate Limits</h4>
              <div class="blog-author d-flex align-items-center">
                <div class="author-content media-body">
                  <p class="text">
                    API requests made by a throttled user or app will fail. All
                    API requests are subject to rate limits. Real time rate
                    limit usage statistics are described in headers that are
                    included with most API responses once enough calls have been
                    made to an endpoint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Faq",
};
</script>