
# MindMates
The MindMates **open collaborative crowdsourcing platform** was built in occasion of the 2020 Hackerearth [Hackccelerate](https://www.hackerearth.com/challenges/hackathon/hackccelerate-2020/) by team MindMates.

## Demo
The platform can be explored at https://mindmates.mooo.com/

## Problem statement
#### The Learning App

As schools around the world respond to the “new normal”, the need for remote learning tools has never been more urgent. Calling out all developers to build solutions that can help schools, educators, students, and their families to make the transition to distance learning easier.

Develop pseudo distance learning applications or online educational tools for remote learning that allow users to interact and a “classroom-like” environment.

## Our proposed solution
MindMates is the first **open collaborative crowdsourcing network** where classmates can meet and propose **project ideas** and get direct collaboration and help ('backing') from **peers** by completing and submitting **tasks** defined by the team leader. 
*Students*, *teachers* and *parents* can **meet** virtually among each other. Group projects can be started and **managed** on the online platform with the supervision of other classmates, teachers and parents. Teachers are provided tools to write articles and insert material into the website through a **wiki** and a **blog**. Students can add wiki articles to their personal **watchlist** and **discuss** teachers' articles. Group projects, once finished, can be **archived** in the 'Projects to discover' section of the website. 

We think this innovative solution can bring a **smoother** and **easier** experience when it comes to *managing group projects* and *learning remotely*, compared to traditional remote communication tools like Facebook, WhatsApp or Moodle.

## Installation
This web app was deployed with AWS. In order to use their cloud infrastructure, you have to register an account at https://portal.aws.amazon.com/billing/signup first. Provide the requested information and, once logged in, you'd want to create an EC2 instance.

Choose a Bitnami WordPress instance. Click on 'Launch instance' and in the AWS Marketplace search for "WordPress with NGINX and SSL Certified by Bitnami and Automattic". You can select the free tier to test the web app.

SSH to the instance, install Git, go to WordPress themes folder and clone the repository into it:

    chmod 400 mindmateskeypair.pem
    ssh -i "mindmateskeypair.pem" bitnami@ec2-x-xxx-xxx-xx.eu-central-1.compute.amazonaws.com
    sudo -i
    apt-get install git
    cd /opt/bitnami/apps/wordpress/htdocs/wp-content/themes
    git clone https://github.com/trajkd/MindMates-wp.git

Remove the Bitnami banner by typing the following in the console: 

    sudo /opt/bitnami/apps/wordpress/bnconfig --disable_banner 1
    sudo /opt/bitnami/ctlscript.sh restart nginx

Now open the public IP address of your instance, go to /wp-admin and enter the default username and password that you can find by typing the following in the console: 

    sudo cat /home/bitnami/bitnami_credentials

Add a new administrator, log out from user, and log in with the newly created credentials. You can delete the default user now.

We've provided a backup file to load with the Updraft Plus backup plugin. It includes all the basic setup you need for the web app to work properly. You will only have to change some fields, like SMTP settings and the main URL of the application. Look in the Manual configuration below to see which fields you will need to change. 
The backup file also contains some example database entries. You can remove them and start from scratch if you want.

### Manual configuration

Go to Appearence > Themes and activate the theme MindMates-wp
Go to Appearence > Customize > Site Identity and set the site title and the site icon as static/img/mindmates-blue-logo.jpg and hit Publish. (You might want to clone the repository to your local machine too in order to complete this operation)

### Create pages
Go to Pages and add the following pages:
- Title: About MM; Slug: aboutmm; Template: About MM
- Title: Blog; Slug: mmnet; Template: Inside MM net; Select 'Allow comments'
- Title: Contact; Slug: contact; Template: Contact
- Title: editidea; Slug: editidea; Template: Edit idea
- Title: ideas; Slug: ideas; Template: Ideas
- Title: Member; Slug: member; Template: Default Template
- Title: member-account; Slug: account; Template: Member Account; Parent: Member; Content: Add the shortcode [woocommerce_my_account]
- Title: member-login; Slug: login; Template: Member Login; Parent: Member; Content: Add the shortcode [wc_login_form]
- Title: member-logout; Slug: loggedout; Template: Member Logout; Parent: Member; Content: Add the shortcode [wc_login_form]
- Title: member-registration-success; Slug: registration-success; Template: Member Registration Success; Parent: Member
- Title: member-signup; Slug: signup; Template: Member Signup; Parent: Member; Content: Add the shortcode [wc_reg_form]
- Title: Projects; Slug: projects; Template: Projects
- Title: publishidea; Slug: publishidea; Template: Publish idea
- Title: viewmode; Slug: viewmode; Template: View mode
- Title: Watchlist; Slug: watchlist; Template: Watchlist
- Title: Wiki; Slug: wiki; Template: Wiki

### Install and setup plugins

**We recommend to follow this order** to install and setup the plugins.

##### WooCommerce
Install this plugin to allow members authentication. You can skip setup store details after installation.
Go to WooCommerce > Settings > Accounts & Privacy > Account creation and untick the option 'When creating an account, automatically generate an account password'.
Scroll down to Privacy Policy and make sure the two text fields in this section are empty. Hit 'Save changes'.

Go to WooCommerce > Settings > Emails and disable all email notifications except New account. You can do that by clicking on 'Manage', unticking Enable this email notification and hitting 'Save changes' for each email notification. Next, scroll down and change the email sender options to your school organization name and email address. Then, add a header image and some footer text for the email and change the style of the email with MindMates' base color #243e8e and hit 'Save changes'.

Go to WooCommerce > Settings > Advanced and remove Cart page and Checkout page by clicking on the x. Select member-account for My account page. Make sure the endpoints text fields are all empty except for Edit account which should contain edit-account, Addresses which should contain edit-address and Logout which should contain logout. Hit 'Save changes'.

Remove from Pages all unnecessary pages that have been created automatically by WooCommerce.

##### Members
Install this plugin to differentiate among Students, Teachers and Parents. Remove from Members > Roles the autogenerated Woocommerce roles except for Customer (i.e., delete Shop manager).
In Members, click on Add new role and create three new roles (Student, Teacher and Parent). Grant Students and Teachers the capabilities to Publish Posts, Delete Posts and List Users.

##### amr users
Install this plugin to monitor all the information a member of the platform has, including its home address, phone, role, email subscription, etc. 
Go to User Lists > Cacheing and select Do re-cache on user update and Hourly and hit 'Update'.
Let at least one user join the platform and become a member. After that, go to User Lists > Fields & Nice Names and hit 'Find any new fields' and then 'Update'. Then go to User Lists > Configure a list and order the fields as you wish. The user list can be found at Users > Users: Details.

##### Custom Post Type Maker
Install this plugin to easily add custom post types. Add two new custom post types:
- Title: Projects; Custom Post Type Name: projects; Label: Projects; Singular Name: Project
- Title: Wiki; Custom Post Type Name: wiki; Label: Wikis; Singular Name: Wiki

Go to Post Types > Taxonomies and add a new custom taxonomy: 
- Title: Project topics; Custom Taxonomy Name: topics; Label: Project topics; Singular Name: Project topic; Post types: Projects

##### Delete Me
Install this plugin to enable deletion of the member's account and its information. Go to Settings > Delete Me and tick Customer in Which roles can delete themselves?. Change Landing URL to your URL. Hit 'Save changes'.

##### Easy Table of Contents
Install this plugin to enable the table of contents in the wiki. Go to Settings > Table of Contents. Tick Wikis in Enable Support and in Auto Insert. Hit 'Save changes'.

##### Easy WP SMTP
Install this plugin and set up the SMTP settings to enable email communication.

##### Peter's Login Redirect
Install this plugin and set it up by going to Settings > Login/logout redirects > All other users and typing /customer/account/ inside URL and /customer/loggedout/ inside Logout URL. Hit 'Update'.

##### WP Better Permalinks
Install this plugin for modifying the permalinks structure. Go to Settings > WP Better Permalinks and select Project topics (topics) from the dropdown next to Projects (projects). Hit 'Save changes'.

##### WP Email Users
Install this plugin to allow teachers to send emails and newsletters to students, parents and other teachers from /wp-admin.

Feel free to delete all other plugins.
___
### Set up DynamoDB and S3
The platform uses AWS's DynamoDB and S3 services to store some data via the AWS SDK for JavaScript. To get acquainted with it, read the official [documentation](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/welcome.html). 

After you successfully create an Identity Pool for unauthenticated users, you'll need to change these lines in the code inside `static/js/editidea.js` (lines 509-516), `static/js/ideas.js` (lines 63-68) and  `static/js/viewideas.js` (lines 1-6):

    var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'eu-central-1:dbfaca2d-0214-4100-9f00-e82d3b15c7ba'});
    var myConfig = new AWS.Config({credentials: myCredentials, region: 'eu-central-1'});
    
    AWS.config.update({credentials: myCredentials, region: 'eu-central-1'});
    
    var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
    
    var s3 = new AWS.S3({apiVersion: "2006-03-01",params: { Bucket: "mindmates" }});
In particular, you'll have to change the `IdentityPoolId`, the `region` and the `Bucket` name.

### Provide access to Wordpress' mySql database
In order to search for members inside the platform, change line 2 inside `fetch.php` with the IP of the instance, the username, password and database name for accessing the mySql database which can be found in `wp-config.php`.

### Hosting
You can use AWS's Route 53 for DNS management, as instructed in [this guide](https://w3path.com/point-domain-to-aws-ec2-instance/). Once you get the nameservers, add them to your domain provider.

Follow [this guide](https://docs.bitnami.com/aws/how-to/generate-install-lets-encrypt-ssl/) to install SSL certificates on your domain.

If you're having trouble, you can also contact us at hello@mindempathy.net

## Usage
You and your other classmates are now ready to sign up and explore the platform together with teachers and parents. You can now publish some group project ideas and chat with members of the platform to join your team and help you out with your group project. Enjoy the experience and happy learning!