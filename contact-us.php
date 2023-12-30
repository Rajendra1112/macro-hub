<?php include ("includes/header.php"); ?>

<section class="breadcrumb-all">
    <figure>
        <img src="images/breadcrumb.png." alt="">
        <figcaption class="breadcrumb-container">
            <div class=" breadcrumb-heading">Contact Us</div>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                <li class="breadcrumb-item active">Contact us</li>
            </ol>
        </figcaption>
    </figure>
</section>

<section class="contact-us section-gutter">
    <div class="container">
        <div class="section-sub-heading">Contact us</div>
        <div class="section-main-heading">Happy Hear From You</div>
        <div class="row gy-4">
            <div class="col-lg-5">
                <div class="contact-detail">
                    <div class="contact-detail-head">Contact Details</div>
                    <div class="contact-detail-wrapper">
                        <div class="icon-wrapper">
                            <i class="fa-solid fa-phone-volume"></i>
                        </div>
                        <div class="contact-details-wrapper">
                            <p>phone</p>
                            <a href="tel:9876543210">9876543210</a>
                        </div>
                    </div>
                    <div class="contact-detail-wrapper">
                        <div class="icon-wrapper">
                            <i class="fa-regular fa-envelope"></i>
                        </div>
                        <div class="contact-details-wrapper">
                            <p>mail info</p>
                            <a href="mailto:example@gmail.com">example@gmail.com</a>
                        </div>
                    </div>
                    <div class="contact-detail-wrapper">
                        <div class="icon-wrapper">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div class="contact-details-wrapper">
                            <p>Address</p>
                            <a href="tel:9876543210">Maitedevi, setopool, Kathmandu</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.198722360291!2d85.33623827535908!3d27.698774981181728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199f75f08da5%3A0x641a4463533be28c!2sUltrabyte%20International%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1677563291102!5m2!1sen!2snp"
                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</section>

<section class="contact-form section-gutter">
    <div class="form-detail-banner">
        <p>Talk to our professional team now</p>
    </div>
    <div class="container">
        <div class="contact-form-wrapper">
            <form action="">
                <div class="contact-form-head">
                    Send a Message
                </div>
                <div class="row gy-4">
                    <div class="col-lg-6">
                        <label for="exampleFormControlInput1" class="form-label">Name*</label>
                        <input type="text" class="form-control">
                        <div class="error">Name requried</div>
                    </div>
                    <div class="col-lg-6">
                        <label for="exampleFormControlInput1" class="form-label">Phone*</label>
                        <input type="text" class="form-control">
                        <div class="error">Phone requried</div>

                    </div>
                    <div class="col-lg-12">
                        <label for="exampleFormControlInput1" class="form-label">Email*</label>
                        <input type="email" class="form-control">
                        <div class="error">Email requried</div>
                    </div>
                    <div class="col-lg-12">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                </div>
                <button class="primary-btnz" type="submit">Send Now <i class="fa-solid fa-arrow-right"></i></button>
            </form>


        </div>

    </div>
</section>
<?php include ("includes/footer.php"); ?>