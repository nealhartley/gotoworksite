/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//model for ther blog angular application

// Define the `phonecatApp` module
var BlogApp = angular.module('BlogApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
BlogApp.controller('BlogController', function BlogController($scope) {
  $scope.blogs = [
      
      /*{  ADD this code snippet above rest to add a new blog post (remove the arrowed comments next to each item)
      
      name: '10/03/2017',           <--date your blog post here
      content: 
        [{paragraph : 'lalalala'},  <--paragraphs go here
        {paragraph: 'blah'}]        <--putting each paragraph under each "paragraph tag" 
                                       will add spaces between the
    },*/
    {
      name: 'Week Two',
      image: 'images/blogImages/blogtwo.jpg',
      content: 
        [{paragraph : 
                'Wow, take a breath. That was a long, tiring, and rewarding week for our team. '},
        {paragraph: 
                    'After the first week of R9 workshops this was our first opportunity as a team to really get down to the business of solving problems. The harder the better we say!'},
        {paragraph: 
                    'Because we run an agile fast paced team our week always starts with a scrum session. I won’t bore you with the details of that… but we had a lot of tasks in this week’s sprint! We got our website up (link) and business cards printed, built a Value Proposition Canvas for our first customer segment, and ran a problem validation workshop with our agency. '}, 
        {paragraph: 
                    'Our win of the week? We are on track to validate our customer’s problems. We’re not all the way there yet but we feel pretty darn confident after getting 70% there in our first problem validation workshop. '},
        {paragraph: 
                    'Next week? We’ll be focussing in on this weeks learnings so that we can continue to validate our problem assumptions and continue to pivot our way onto the path leading to a viable MVP solution. '},
        {paragraph: 
                    'Well, we’re off to celebrate St Paddy’s day now. But, because an entrepreneur doesn’t have an off switch you’ll  probably see us running secret problem interviews with everyone we meet!'}
        ]
    },
    {
       name: 'Week One',
       image: 'images/blogImages/artwork.jpg',
      content: 
        [{paragraph :
            'The first week of R9 Accelerator 3.0 draws to close. This week was ‘Bootcamp’, a jam-packed week of workshops, sessions and team building exercises, to prime the R9 ‘cohort’ with the tools and methodologies necessary to carry us forward'},
        {paragraph: 
            'We have learnt a lot this week. Highlights include a presentation by a Gov Tech guru, who spoke to us live from Austin Texas, and inspirational talks on subject matter such as exponential technology, lean start up and market validation.'},
        {paragraph:
            'There was also content we already knew well, such as Agile, Lean, design thinking, wellness and resilience. However, with such a wide range of stakeholders, with different levels of skills and experience, it is no surprise Creative HQ took such a uniform approach.'},
        {paragraph:
            'What really stood out to me this week is our team. Teamwork is the most important contributor to success in this programme, and we are getting on ridiculously well! We have a quiet confidence about us, because with our breadth of knowledge, and range of skills, we have the potential to go far in this programme.'}
        ]
    }
  ];
});

