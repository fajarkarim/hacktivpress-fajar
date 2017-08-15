<template lang="html">
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-5">
        <h2 class="pb-5 text-center">Register</h2>
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputEmail" placeholder="Username">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" placeholder="Password">
          </div>
        </div>
        <div class="row justify-content-center">
          <button class="btn btn-primary mt-4" type="button" name="button">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style lang="css">
</style>
