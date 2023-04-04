import liff from '@line/liff'

class Liff {
  isLoading: boolean = false

  constructor(public id: string) {}

  async setup() {
    this.isLoading = true

    await liff
      .init({ liffId: this.id })
      .then(() => {
        console.log('liff.init() done')
      })
      .catch((error) => {
        console.log(`liff.init() failed: ${error}`)

        if (!this.id) {
          console.info(
            'LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable.'
          )
        }

        return Promise.reject(error)
      })
      .finally(() => {
        this.isLoading = false
      })
  }
}

export default defineNuxtPlugin(async () => {
  const id = useRuntimeConfig().liffId

  await new Liff(id).setup()

  return {
    provide: {
      liff,
    },
  }
})
