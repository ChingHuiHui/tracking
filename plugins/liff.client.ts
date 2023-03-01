import liff from '@line/liff'

export default defineNuxtPlugin(() => {
  const liffInit = liff
    .init({ liffId: useRuntimeConfig().public.liffId })
    .then(() => {
      console.log('liff.init() done')
    })
    .catch((error) => {
      console.log(`liff.init() failed: ${error}`)
      if (!useRuntimeConfig().public.liffId) {
        console.info(
          'LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable.'
        )
      }
      return Promise.reject(error)
    })

  return {
    provide: {
      liff,
      liffInit,
    },
  }
})
