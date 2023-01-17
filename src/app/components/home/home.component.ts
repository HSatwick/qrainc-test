import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  missionStatement = '';
  paraOne = '';
  paraTwo = '';
  paraThree = '';

  constructor() { }

  ngOnInit(): void {
    this.setMissionStatement();
    this.setAboutUs();
  }

  setMissionStatement() {
    this.missionStatement = 'To provide independent and uniquely accredited microbiology, environmental & materials testing, and technical services of the highest quality in a cost-effective and timely manner for the success of our customers.'
  }

  setAboutUs() {
    this.paraOne = 'Quest Research And Analytics Inc. (QRA) is a Canadian biotechnology company that operates a state of the art laboratory engaged in bio-analytical, consulting and contract research services at Edmonton. Our facility is equipped with modern equipment and staffed by skilled personnel who are dedicated to providing continuous value for QRA customers and their clients.'
    this.paraTwo = 'Good Laboratory Practices (GLP) and ISO/IEC 17025 guidelines form the backbone of QRA’s management system. The objective throughout our entire company is to provide consistent on-time delivery, industry leading turnaround-times and quality of the highest magnitude, both in terms of accreditation, test results and the overall customer experience. QRA’s analytical guidelines range from but are not limited to Health Canada’s Compendium of Analytical Methods (MFHPB, MFLP), MLG Methods from USDA, APHA’s Standard Methods, USP and AOAC Methods for a wide range of analyses.'
    this.paraThree = 'Our management and technical team have the qualifications and expertise in providing analytical and consulting services. Therefore, we are committed to customer satisfaction through continuous improvement and by dedication to provide services that meet and exceed customer\'s expectations and specifications. We maintain a strict policy of customer confidentiality and highly value any feedback.'
  }

}
