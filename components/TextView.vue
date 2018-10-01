<template>

<section class="section">

        <div class="container">
            <h1 class="title">
            {{title}}
          </h1>
            <h2 class="subtitle">
            {{publication}}
            <br />
            {{date}}
          </h2> <div class="content">
          <p>
            {{fullText}}
          </p>
          </div>
        </div>


</section>

</template>
<script>
export default {
    props: ["title", "publication", "abstract", "date", "slug", "fullText"]
};
</script>
