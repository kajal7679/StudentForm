import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

  export class FeedbackComponent {
    feedbackForm: FormGroup;
    feedbackList: Array<{ name: string, feedback: string }> = [];
  
    constructor(private fb: FormBuilder) {
      this.feedbackForm = this.fb.group({
        studentName: ['', Validators.required],
        batchNumber: ['', [Validators.required, Validators.min(1)]],
        feedback: ['', Validators.required]
      });
    }
  
    onSubmit() {
      if (this.feedbackForm.valid) {
        this.feedbackList.push({
          name: this.feedbackForm.value.studentName,
          feedback: this.feedbackForm.value.feedback
        });
        this.feedbackForm.reset();
      }
    }
  }


