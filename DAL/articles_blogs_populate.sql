--Order of inserting new blog onto a main page:
--Insert a full article into Articles table.
--Insert a blog entry into Blogs table.
--If a given blog entry has tags, insert them into Tags table.
--Bind tags with a particular blog by inserting respective key ids into BlogTags table.


--Populate Articles table:
--Press Releases:
INSERT INTO Articles(Title, ImageURI, [FullText], CreatedOn)
VALUES('Press Release', '/Content/article_images/150106_press_release.jpg',
N'Press Release Announcing II Family Congress 2015<br /><br />
<a href="http://www.kongresrodzinychicago.org">www.kongresrodzinychicago.org</a> / <a href="http://www.facebook.com/KongresRodziny">www.facebook.com/KongresRodziny</a><br />
tel: 773-414-5461<br /><br />
II Family Congress will take place from February 6 until February 15 2015 spanning over an entire week devoted to evenings of recollection as well as workshops for married couples, for those preparing to take the sacrament of marriage, for those who desire to deepen their knowledge and spiritual life, as well as for young adults.  Recollections and workshops are complemented by cultural and artistic events.<br /><br />
The II Family Congress under the leading theme ''Parents – Faces of Love.  We Are All Called to Love and Educate'' is organized by the initiative of secular group of professionals from the Foundation Strong Family, under the patronage of the Archbishop of Chicago and with cooperation from the Department of Family Ministry and the Department of Young Adults Ministry. The entire endeavor is under the spiritual tutelage of Fr. Jerzy Karpinski, SJ.<br /><br />
In anticipation of the Family Synod set to take place in October of 2015 in Rome, Holy Father Francis I encourages all the faithful to reflect on the mystery of family throughout the entire upcoming year. For this reason, the organizing team feels especially motivated to continue preparing the II Family Congress to be an occasion to cultivate a deeper understanding and appreciation of family life in our Archdiocese.<br /><br />
We all know that the foundation of a happy marriage and a strong and happy family is love between a husband and a wife as well as between parents and children.  Happy family is the one in which everyone loves everyone. But to be a responsible parent means to both love and demand.  To love and demand is to love and educate the children in order to support their complete development.<br /><br />
We are all called to love and educate those we love.  All of us are called.  Not only those who are successful and do not face serious challenges.  To love and educate their loved ones are also called those who are damaged and painfully experienced by life, those who went through suffering and a personal way of the cross, and those who were abandoned.  All of us can learn what mature love really is from Jesus and therefore all of us can become a blessing to our loved ones.<br /><br />
During the II Family Congress, the workshops, recollections, and conferences will center on different aspects of love encountered in marriage and family.  Love is a special way of relating to another person in a way making that loved person want to live and which makes that loved person find strength to face even the most difficult life situations. The kind of love taught by Jesus manifests itself in care, fidelity, responsibility, perseverance, and continued conversion in order to love our loved ones more and with greater wisdom.  To love like Jesus means to be ready to sacrifice one''s life for loved ones. It means treating spouse and children as greatest treasure on this planet. It means becoming a defense for them as well as a witness of God''s love for all men.<br /><br />
Taking under consideration the complex and rich character of the leading theme, the II Family Congress was divided into five sections in order for everyone to find something that will speak to him or her more directly: prayer, conferences, workshops, symposium and cultural events. The presentations will take place in a number of parishes across Chicagoland and will be carried primarily in Polish but there will also be selections for English speaking participants.',
GETUTCDATE())

INSERT INTO Blogs(Title, ImageURI, Slug, UserName, FullArticleURL, CreatedOn, Comments, Shares)
VALUES('Press Release', '/Content/article_images/150106_press_release.jpg', 
N'Press Release Announcing II Family Congress 2015<br /><br />
II Family Congress will take place from February 6 until February 15 2015 spanning over an entire week devoted to evenings of recollection as well as workshops for married couples, for those preparing to take the sacrament of marriage, for those who desire to deepen their knowledge and spiritual life, as well as for young adults.  Recollections and workshops are complemented by cultural and artistic events.',
'Jerzy',
'/Home/Article?id=1',
GETUTCDATE(),
NULL,
NULL)

INSERT INTO Articles(Title, ImageURI, [FullText], CreatedOn)
VALUES('Press Release 2', '/Content/default_blog_image/default_document.png',
N'The Strong Family Foundation together with the organizing committee and a team of volunteers is pleased to announce the II Family Congress taking place February 6 – 15, 2015 in the Archdiocese of Chicago. Married couples, individuals preparing for the sacrament of marriage as well as persons interested in enriching and improving quality of relationships in their families and community are invited to attend evenings of recollection, workshops, and talks on topics related to the leading theme: <i>''Parents – Faces of Love.  We are all called to love and educate.''</i><br /><br />
The best foundation of a happy marriage and a strong and happy family is love between a husband and a wife as well as between parents and children.  Happy family is one in which everyone loves everyone. But to be a responsible parent means to both love and demand.  To love and demand is to love and educate children and one another in order to support complete development of each individual. II Family Congress planned workshops and advice from speakers who are leading specialists in their fields: family ministry and counseling, psychology, children’s psychology, spirituality, as well as theology.<br /><br />
Also, in anticipation of the Family Synod set to take place in October of 2015 in Rome, Holy Father Francis I encourages all the faithful to reflect on the mystery of family throughout the entire upcoming year. For this reason, the organizing team feels especially encouraged in presenting the II Family Congress as an excellent occasion to cultivate a deeper understanding and appreciation of family life in our Archdiocese.<br /><br />
Information about guests and speakers of the II Family Congress is available on the event''s web page: <a href="http://www.familycongresschicago.org">www.familycongresschicago.org</a>. Voice messages and questions can be directed to 773-414-5461.<br /><br />
Events are going to take place in 15 venues across the Archdiocese. Please refer to the website for a complete list of speakers, dates, and locations.<br /><br />
II Family Congress is organized under the spiritual patronage of the Archbishop of Chicago.',
GETUTCDATE())

INSERT INTO Blogs(Title, ImageURI, Slug, UserName, FullArticleURL, CreatedOn, Comments, Shares)
VALUES('Press Release 2', '/Content/default_blog_image/default_document.png', 
N'The Strong Family Foundation is pleased to announce the Program of the II Family Congress taking place February 6 – 15, 2015 in the Archdiocese of Chicago. Married couples, individuals preparing for the sacrament of marriage and persons interested in improving quality of relationships in their families are invited to attend recollections and talks on topics related to the leading theme: <i>''Parents – Faces of Love.  We are all called to love and educate.''</i><br /><br />
Events, in English and in Polish, are going to take place in 15 venues across the Archdiocese. Please refer to the website for a complete list of speakers, dates, and locations: <a href="http://www.familcongresschicago.org">www.familcongresschicago.org</a><br /><br />
II Family Congress is organized under the spiritual patronage of the Archbishop of Chicago.',
'Jerzy',
'/Home/Article?id=2',
GETUTCDATE(),
NULL,
NULL)
--End of Press Releases

INSERT INTO Articles(Title, ImageURI, [FullText], CreatedOn)
VALUES('Press Release','/Content/article_images/press_release_III.jpg',
N'We are announcing the Third Family Congress of Polonia, Chicago 2015
<br /><br />
<a href="http://www.familycongresschicago.org">www.familycongresschicago.org</a> | <a href="https://www.facebook.com/KongresRodziny">www.facebook.com/KongresRodziny</a><br />
<a href="mailto:info@familycongresschicago.org">info@familycongresschicago.org</a><br />
Tel: 773-414-5461<br />
<br /><br />
The Third Family Congress of Polonia in Chicago will take place on Nov. 19-22, 2015. The time will be devoted to workshop meetings, conferences, and prayers. Invitation to participate is extended to all people, those from single-person as well as those from multi-person families, living happily, or going through difficulties or crisis.
<br /><br />
We will be reflecting and praying over the subject: Wounded – Healed in Love. The organizers hope that many people will actively participate in the workshops and prayer meetings, and they believe that God, who is LOVE, will comfort everyone who feels wounded, lost, or guilty in their relations towards love.
<br /><br />
Love is a great gift from God to us. Life thrives thanks to love. The lack of love or its distortion cause disturbance in development, unhappiness, and destroy interpersonal relations. Love applied correctly is the basis for healing from different types of wounds. Love is a psychological and spiritual experience, but its presence or lack of thereof inflicts also the body. That is why the presence of love in one’s life transcends his/her whole existence and contributes to the person''s wholesome development. Its distortion or lack has consequences in all areas of human life.
<br /><br />
The Congress is organized by the initiative of lay members of the Strong Family Foundation under the auspices of the Chicago Archbishop Blase J. Cupich, in cooperation with the Executive Director of the Catholic League for Religious Assistance to Poland and Polonia, Bishop Andrzej P. Wypych, and the Deputy Archbishop to Polonia, Rev. Robert Fedek. The spiritual leader of this beautiful endeavor is Father Jerzy Karpinski. Voluntary assistance is also provided by members of the Support Group for Difficult Marriages SYCHAR, House Church, and the office of Ministry for Archdiocesan Families.
<br /><br />
The program of the Congress has been prepared to provide something valuable for everyone in prayer meetings, conferences and workshops. The presentations will be mainly in Polish, and selected ones also in English.  
<br /><br />
Renowned experts in their fields have been invited to speak at the Congress. The main speaker is Professor Father Romuald Jaworski from Poland. Other speakers in alphabetical order will be as follows: Fr. Paweł Bandurski, Halina and Jerzy Florczyk, s. Maksymiliana Kamiń ska, Fr. Piotr Kochanowicz, Robert Lawler, Małgorzata Olczak, Fr. Tomasz Oleniacz, Rev. Piotr Samborski, Kamila Smyk-Jaworska, Fr. Paweł Witon, Rev. Michał Wyrzykowski. 
<br /><br />
Ewa Kozioł<br />
Congress Organizer',
GETUTCDATE())


INSERT INTO Blogs(Title, ImageURI, Slug, UserName, FullArticleURL, CreatedOn, Comments, Shares)
VALUES('Press Release', '/Content/article_images/press_release_III.jpg', 
N'The Third Family Congress of Polonia in Chicago will take place on Nov. 19-22, 2015. The time will be devoted to workshop meetings, conferences, and prayers.
Invitation to participate is extended to all people, those from single-person as well as those from multi-person families, living happily, or going through difficulties or crisis.
We will be reflecting and praying over the subject: Wounded – Healed in Love.
The Congress is organized by the initiative of lay members of the Strong Family Foundation under the auspices of the Chicago Archbishop Blase J. Cupich.
The presentations will be mainly in Polish, and selected ones also in English.
Renowned experts in their fields have been invited to speak at the Congress. The main speaker is Professor Father Romuald Jaworski from Poland.',
'Jerzy',
'/Home/Article?id=',
GETUTCDATE(),
NULL,
NULL)