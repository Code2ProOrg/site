var TESTIMONIALS = [
    {
        "name": "Ha Brown (Hai Ha Do)",
        "url": "https://uk.linkedin.com/in/haihado",
        "text": "Viet Le is an experienced professional programmer who has passion for coaching junior programmers. I was a C++ hobbyist with only a year experience in computer science and wished to be a professional C++ programmer. With Viet’s guidance, I revised various technical topics such as C++, data structures, multi-threading, multi-processing, etc. He gave me a lot of useful real life examples, insights and realistic mock technical interviews that only professional can give you. I got my first C++ developer role within 2 months!"
    },
    {
        "name": "Hoang Dang Duy",
        "url": "https://github.com/hoangdangduy",
        "text": "Bài tập 4 tuần không khó nhưng để có lời giải tốt thì cần cả 1 sự rèn luyện và học hỏi nhiều :D Sau khi được anh review code thì em cũng biết code em cũng cần phải sửa một số lỗi và cần giải pháp tối ưu."
    },
    {
        "name": "Nam Tran",
        "url": "https://github.com/hienhpss",
        "text": "Video hướng dẫn về git rất hữu ích và đi thẳng vào trọng tâm.  Người dạy có kiến thức tốt và có tâm. Hy vọng chương trình tiếp tục được phát triển để giúp đỡ anh em dev nhiều hơn."
    },
    {
        "name": "Lê Trung Chánh",
        "url": "https://github.com/giaosudau",
        "text": "Reviewer tâm huyết có response time cực thấp submit PR cái là review ngay."
    },
    {
        "name": "Nhan Tran",
        "url": "https://github.com/nhantd",
        "text": "Code review process is strict, yet extremely useful, in order to make your code highly optimized, extensible, and easy to test. This is best part of doing the exercise as you get to know the quality code review at top tech companies."
    },
    {
        "name": "Tran Thai Nguyen",
        "url": "https://github.com/thainguyentran",
        "text": "Câu hỏi đi từ dễ tới khó. Thời gian từ khi vừa nộp code tới lúc có comment về code, review, yêu cầu chỉnh sửa là rất ngắn, gần như ngay lập tức. Người tạo ra series rất có tâm huyết, điều đó có thể thấy qua phần chuẩn bị trước khi đưa ra thử thách và sau khi nộp câu trả lời của các thành viên thì có bình luận, chỉ dẫn, hướng dẫn để chỉnh sửa code tốt hơn."
    },
    {
        "name": "Thao Tran",
        "url": "https://github.com/vietthaotran",
        "text": "Đề bài thực tiễn, ngắn gọn, súc tích và rất gần với câu hỏi trong vòng technical test của phỏng vấn. Code review và video rất hiệu quả trong việc sửa lỗi mình sai, và học tập những phương pháp giải hữu ích, cô đọng được kiến thức và thực hành lý thuyết được học. Ngoài ra, yêu cầu cao của bài giải và quy cách contribute code rất thực tế, có thể giúp ứng viên khẳng định sự chuyên nghiệp và trình độ của bản thân đối với công ty lớn. Sau 4 tuần em học được rất nhiều."
    },
];

var TEMPLATE= ' \
<div class="testimonial-item"> \
    <div class="panel panel-default"> \
        <div class="panel-heading testimonial-heading"> \
            <h2 class="testimonial-giver"><a href="__URL__">__NAME__</a></h2> \
        </div> \
        <div class="panel-body testimonial-body"> \
            <span class="testimonial-text">__TEXT__</span> \
        </div> \
    </div> \
</div>';

console.log('<h1>Testimonials from students</h1>');

for (var i in TESTIMONIALS) {
    var output = TEMPLATE;
    var testimonial = TESTIMONIALS[i];
    output = output.replace('__URL__', testimonial.url);
    output = output.replace('__NAME__', testimonial.name);
    output = output.replace('__TEXT__', testimonial.text);
    console.log(output);
}
