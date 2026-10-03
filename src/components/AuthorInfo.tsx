import React from "react";

export default function AuthorInfo({ author }: { author: string }) {
  return (
    <div>
      <h2>{author}</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
        consequatur, tempore, itaque autem vitae perferendis veritatis illum
        voluptatem soluta, rerum placeat explicabo obcaecati ducimus deleniti
        fugiat. Unde quidem animi repellat!. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quae, enim optio voluptatum vero velit
        deserunt labore eaque voluptatem tenetur, illo nostrum praesentium
        delectus minima amet quas sequi impedit ullam recusandae.
      </p>
    </div>
  );
}
