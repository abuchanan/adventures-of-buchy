import React from 'react';

const Pub = props => <div>
  <a href={ props.url }>{ props.title }</a>
</div>;

export default props => <main id="resume-page">

<h2>School</h2>
<section className="resume-section">

<h3>B.S. Computer Science/Computer Systems @ Oregon State University</h3>
<p className="dates">2003-2007, 2011-2013</p>
<p>Also studied Electrical Engineering, Business, Spanish, Biology but completed no degrees.</p>
</section>

<h2>Work</h2>

<section className="resume-section">
<h3>Nintex</h3>
<p className="technologies">Web: Javascript, Node, Gulp, Angular, React</p>
<p>In <span className="dates">2016</span>, I worked on front-end development for a core UX team. </p>
</section>

<section className="resume-section">
<h3>Findly</h3>
<p className="technologies">Web: Javascript, Node, jQuery, Gulp</p>
<p>In <span className="dates">2014</span>, I worked on every aspect of a complex product called CX Apply, a web application proxies a third-party job application form in order to provide a nice experience on mobile devices.</p>
<p>Wrapping an existing application that we had no control over was challenging, and we had to get pretty creative. In addition, this project was quickly accelerated from an experiment to the most important product in the company, growing from 2 developers to 10+, and facing a lot of growing pains the whole way. I learned a lot about project management and stress on this project.</p>
</section>

<section className="resume-section">
<h3>Botany and Plant Pathology @ Oregon State University</h3>
<p className="technologies">Bioinformatics: Python, Perl, Sun Grid Engine, Linux</p>
<p>From <span className="dates">2011 to 2014</span>, I worked on bioinformatics with a few labs. I helped  researcher get insights into their data by writing programs. Mostly I worked on transcriptomics projects.</p>
<p>This was such a great experience. Biology is such a fascinating topic. I learned it's also a very broad topic, with hundreds (or thousands) of subtopics, all interesting in their own way, and most big enough to sustain lifetimes of work and research.</p>
<p>This also exposed me to a new area of programming – data processing. It was nice to take a break from web development and exercise other aspects of software engineering and computer science. Some datasets were big enough to warrant concurrent processing, and learning to throw a few machines at a problem was a lot of fun.</p>
</section>

<section className="resume-section">
<h3>Mozilla</h3>
<p className="technologies">Web: PHP, Python, Javascript, Django, Drupal</p>
<p>During <span className="dates">2007 to 2010</span>, I worked on web development on numerous projects, mostly in conjunction with the marketing team.</p>
<p>I really feel like I grew up as a software engineer at Mozilla, and you couldn't ask for a better environment to grow up in. I was surrounded by people way smarter than me. I got to absorb Mozilla's mission and principles. I worked with people from around the world on a daily basis. I started as an intern working on tiny, internal PHP projects. Through the years I worked on dozens of different projects with lots of different teams. The variety was exciting. I owned most projects on mozilla.com for awhile, and it felt pretty cool (and sometimes scary!) to know I helped serve a website to hundreds of millions of people.</p>
</section>

<section className="resume-section">
<h3>Open Source Lab @ Oregon State University</h3>
<p className="technologies">Web: PHP, Drupal, Javascript</p>

<p>During <span className="dates">2006 and 2007</span>, I had my first job in software, learning web development and generally having a great time with a bunch of Linux nerds.</p>

<p>I learned PHP and Drupal during this time. I designed and built two websites: osuosl.org (the lab's website) and goscon.org (government open-source conference website). I also learned that I am bad at graphic design.</p>

<p>I worked on a project which would help the infrastructure team manage their inventory of servers and networks and all that goes along with those. Looking back, I laugh because I think we spent more time debating our homegrown PHP app framework, or the website content, or the project name than we did putting features in front of users. Typical.</p>

<p>This job really set the path of my life and career for 5-10 years. When I applied for this job, I also applied for the Business Solutions Group, a Microsoft shop. I got both jobs and I had to choose. Being young and inexperienced, I'm sure my decision was mostly arbitrary, but I do remember being drawn to the idea of open source. So, I chose the OSL and became a Linux zealot and a web developer and I still am. Sometimes I ponder where I'd be if I had chosen the other path.</p>
</section>

<h2>Science</h2>
<section className="resume-section">
<p>I feel very lucky to have had the opportunity to live inside a world of biology research for a few years. Below are some of the projects I contributed to.</p>
</section>

<section className="resume-section">
  <h3>Nitrifying Bacteria</h3>
  <h3>Publications</h3>
  <Pub
    title="Interactions of Nitrosomonas europaea and Nitrobacter winogradskyi grown in co-culture"
    author="Pèrez, Josè and Buchanan, Alex and Mellbye, Brett and Ferrell, Rebecca and Chang, Jeffrey H and Chaplen, Frank and Bottomley, Peter J and Arp, Daniel J and Sayavedra-Soto, Luis A"
    journal="Archives of microbiology"
    volume="197"
    number="1"
    pages="79--89"
    year="2015"
    publisher="Springer"
    url="https://scholar.google.com.au/citations?view_op=view_citation&hl=en&user=C4C2QrgAAAAJ&citation_for_view=C4C2QrgAAAAJ:u-x6o8ySG0sC"
  />

  <Pub
    title="Nitrobacter winogradskyi transcriptomic response to low and high ammonium concentrations"
    author="Sayavedra-Soto, Luis and Ferrell, Rebecca and Dobie, Michael and Mellbye, Brett and Chaplen, Frank and Buchanan, Alex and Chang, Jeffrey and Bottomley, Peter and Arp, Daniel"
    journal="FEMS microbiology letters"
    volume="362"
    number="3"
    pages="1--7"
    year="2015"
    publisher="The Oxford University Press"
    url="https://scholar.google.com.au/citations?view_op=view_citation&hl=en&user=C4C2QrgAAAAJ&citation_for_view=C4C2QrgAAAAJ:d1gkVwhDpl0C"
  />
</section>

<section className="resume-section">
  <h3>Transcriptomics of P. protegens</h3>
  <h3>Publications</h3>
  <Pub
    title="Using next-generation sequencing to determine the influence of metabolic intermediates on the Pseudomonas protegens transcriptome."
    author="Clifford, J and Kidarsa, T and Buchanan, A and Chang, JH and Loper, J"
    booktitle="PHYTOPATHOLOGY"
    volume="103"
    number="6"
    pages="28--28"
    year="2013"
    organization="AMER PHYTOPATHOLOGICAL SOC 3340 PILOT KNOB ROAD, ST PAUL, MN 55121 USA"
    url="https://scholar.google.com.au/citations?view_op=view_citation&hl=en&user=C4C2QrgAAAAJ&citation_for_view=C4C2QrgAAAAJ:2osOgNQ5qMEC"
  />

  <Pub
    title="Phloroglucinol functions as an intracellular and intercellular chemical messenger influencing gene expression in Pseudomonas protegens"
    author="Clifford, Jennifer C and Buchanan, Alex and Vining, Oliver and Kidarsa, Teresa A and Chang, Jeff H and McPhail, Kerry L and Loper, Joyce E"
    journal="Environmental microbiology"
    year="2015"
    publisher="Wiley Online Library"
    url="https://scholar.google.com.au/citations?view_op=view_citation&hl=en&user=C4C2QrgAAAAJ&citation_for_view=C4C2QrgAAAAJ:qjMakFHDy7sC"
  />
</section>

<section className="resume-section">
  <h3>Sulforaphane</h3>

  <h3>Publications</h3>
  <Pub
    title="Effects of sulforaphane and 3, 3′-diindolylmethane on genome-wide promoter methylation in normal prostate epithelial cells and prostate cancer cells"
    author="Wong, Carmen P and Hsu, Anna and Buchanan, Alex and Palomera-Sanchez, Zoraya and Beaver, Laura M and Houseman, E Andres and Williams, David E and Dashwood, Roderick H and Ho, Emily"
    journal="PloS one"
    volume="9"
    number="1"
    pages="e86787"
    year="2014"
    publisher="Public Library of Science"
    url="https://scholar.google.com.au/citations?view_op=view_citation&hl=en&user=C4C2QrgAAAAJ&citation_for_view=C4C2QrgAAAAJ:u5HHmVD_uO8C"
  />

  <Pub
    title="Sulforaphane alters the expression of long intragenic non-coding RNAs that are dysregulated in prostate cancer cells (644.10)"
    author="Beaver, Laura and Buchanan, Alex and Sokolowski, Elizabeth and Glasser, Sarah and Wong, Carmen and Chang, Jeff and Williams, David and Dashwood, Roderick and Ho, Emily"
    journal="The FASEB Journal"
    volume="28"
    number="1 Supplement"
    pages="644--10"
    year="2014"
    publisher="FASEB"
    url="https://scholar.google.com.au/citations?view_op=view_citation&hl=en&user=C4C2QrgAAAAJ&citation_for_view=C4C2QrgAAAAJ:zYLM7Y9cAGgC"
  />

  <Pub
    title="Transcriptome analysis reveals a dynamic and differential transcriptional response to sulforaphane in normal and prostate cancer cells and suggests a role for Sp1 in chemoprevention"
    author="Beaver, Laura M and Buchanan, Alex and Sokolowski, Elizabeth I and Riscoe, Allison N and Wong, Carmen P and Chang, Jeff H and Löhr, Christiane V and Williams, David E and Dashwood, Roderick H and Ho, Emily"
    journal="Molecular nutrition & food research"
    volume="58"
    number="10"
    pages="2001--2013"
    year="2014"
    publisher="Wiley Online Library"
    url="https://scholar.google.com.au/citations?view_op=view_citation&hl=en&user=C4C2QrgAAAAJ&citation_for_view=C4C2QrgAAAAJ:9yKSN-GCB0IC"
  />

  <Pub
    title="Genome-wide transcriptome analysis of the effects of sulforphane on normal and prostate cancer cells"
    author="Beaver, Laura Michelle and Buchanan, Alex and Sokolowski, Elizabeth I and Chang, Jeff H and Wong, Carmen P and Williams, David E and Dashwood, Roderick H and Ho, Emily"
    journal="The FASEB Journal"
    volume="27"
    number="1\_MeetingAbstracts"
    pages="248--2"
    year="2013"
    publisher="FASEB"
    url="https://scholar.google.com.au/citations?view_op=view_citation&hl=en&user=C4C2QrgAAAAJ&citation_for_view=C4C2QrgAAAAJ:UeHWp8X0CEIC"
  />
</section>

<section className="resume-section">
  <h3>Transcriptomics of a Potato Virus</h3>
  <p>I didn't do a lot for this project, just helping run some data processing code. Nice of them to include me on the publication though.</p>

  <h3>Publications</h3>
  <Pub
    title="RNA-Seq analysis of resistant and susceptible potato varieties during the early stages of potato virus Y infection"
    author="Goyer, Aymeric and Hamlin, Launa and Crosslin, James M and Buchanan, Alex and Chang, Jeff H"
    journal="BMC genomics"
    volume="16"
    number="1"
    pages="1"
    year="2015"
    publisher="BioMed Central"
    url="https://scholar.google.com.au/citations?view_op=view_citation&hl=en&user=C4C2QrgAAAAJ&citation_for_view=C4C2QrgAAAAJ:IjCSPb-OGe4C"
  />
</section>

<section className="resume-section">
  <h3>Alternative Splicing in P.cubensis</h3>
  <p>I put a lot of work and effort into this project, and I learned a ton about the complexity of a microbiology research project.</p>

  <h3>Publications</h3>
  <Pub
    title="Alternative Splicing in the Obligate Biotrophic Oomycete Pathogen Pseudoperonospora cubensis"
    author="Burkhardt, Alyssa and Buchanan, Alex and Cumbie, Jason S and Savory, Elizabeth A and Chang, Jeff H and Day, Brad"
    journal="Molecular Plant-Microbe Interactions"
    volume="28"
    number="3"
    pages="298--309"
    year="2015"
    publisher="Am Phytopath Society"
    url="https://scholar.google.com.au/citations?view_op=view_citation&hl=en&user=C4C2QrgAAAAJ&citation_for_view=C4C2QrgAAAAJ:Y0pCki6q_DkC"
  />
</section>

<section className="resume-section">
  <h3>Modeling and Simulation of Bacteria</h3>
  <p>This was one of the most fascinating projects I came across – building a computer model of a bacteria and running simulations to learn more about it. This was also way, way over my head because building the model required a lot of biochemistry knowledge.</p>
  <p>I didn't end up contributing a lot to this project because it required biochemsitry expertise. I mostly just helped write/run scripts to help make tedious, time-consuming tasks go faster.</p>

  <h3>Publications</h3>
  <Pub
    title="Constraints-based modeling of the nitrifying bacteria Nitrosomonas europaea and Nitrobacter hamburgensis"
    author="Chaplen, Frank WR and Buchanan, Alex and Chang, Jeff H and Sayavedra-Soto, Luis"
    booktitle="ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY"
    volume="245"
    year="2013"
    organization="AMER CHEMICAL SOC 1155 16TH ST, NW, WASHINGTON, DC 20036 USA"
    url="https://scholar.google.com.au/citations?view_op=view_citation&hl=en&user=C4C2QrgAAAAJ&citation_for_view=C4C2QrgAAAAJ:Tyk-4Ss8FVUC"
  />

  <Pub
    title="Elucidating the coupled dynamics of the nitrifying bacteria Nitrosomonas europaea and Nitrobacter winogradskyi grown in chemostat co-culture"
    author="Chaplen, Frank WR and Perez, Jose and Bottomley, Peter and Buchanan, Alex and Murthy, Ganti S and Chang, Jeff H and Sayavedra-Soto, Luis A"
    booktitle="ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY"
    volume="247"
    year="2014"
    organization="AMER CHEMICAL SOC 1155 16TH ST, NW, WASHINGTON, DC 20036 USA"
    url="https://scholar.google.com.au/citations?view_op=view_citation&hl=en&user=C4C2QrgAAAAJ&citation_for_view=C4C2QrgAAAAJ:W7OEmFMy1HYC"
  />

  <Pub
    title="Model integration for elucidating the coupled environmental dynamics of the nitrifying bacteria Nitrosomonas europaea and Nitrobacter winogradskyi"
    author="Chaplen, Frank WR and Perez, Jose and Bottomley, Peter and Buchanan, Alex and Murthy, Ganti S and Chang, Jeff H and Sayavedra-Soto, Luis A"
    booktitle="ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY"
    volume="247"
    year="2014"
    organization="AMER CHEMICAL SOC 1155 16TH ST, NW, WASHINGTON, DC 20036 USA"
    url="https://scholar.google.com.au/citations?view_op=view_citation&hl=en&user=C4C2QrgAAAAJ&citation_for_view=C4C2QrgAAAAJ:YsMSGLbcyi4C"
  />
</section>

</main>;
