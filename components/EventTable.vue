<style scoped>
.table .td{
  text-align: left;
}

  </style>

  <template>

<section>

    <table class="table is-fullwidth is-narrow">
    <!-- <thead>
      <tr>
        <th>Event</th>
        <th>Location</th>
        <th>Title</th>
        <th>Abstract</th>
        <th>Year</th>
        <th>Month</th>
        <th>URL</th>
      </tr>
    </thead> -->
    <!-- <tfoot>
      <tr>
        <th>Year</th>
        <th>Month</th>
        <th>Event</th>
        <th>Location</th>
        <th>Title</th>
        <th>Abstract</th>
        <th>URL</th>
      </tr>
    </tfoot> -->
   <tbody>

        <tr>
        <td>{{ year }}/{{month}}</td>
        <td>{{ event }}</td>
        <td>{{ title }}</td>
        <td>{{ location }}</td>
        <td>{{ abstract }}</td>
        <td><a v-bind:href="url"><img src="images/baseline-link-24px.svg"></a> </td>
      </tr>

  </tbody>
  </table>
</section>


</template>

<script>

export default {
  name: 'EventTable',
    props: ["year", "month", "location", "event", "title", "abstract", "url"]
};

</script>
