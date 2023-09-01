<template>
    <button @click="authenticate" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-6">
        Authenticate
    </button>
</template>

<script setup lang="ts">
import { AuthClient } from '@dfinity/auth-client';
const authClient = await AuthClient.create();

const authenticate = async () => {
  authClient.login({
    identityProvider: import.meta.env.DFX_NETWORK,
    maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
    onSuccess: async () => {},
  });

}

const getIdentity =  async() => {
  const identity = authClient.getIdentity();
  const principal = identity.getPrincipal().toString();
  console.log(principal);
}


</script>