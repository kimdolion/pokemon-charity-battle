// https://github.com/ShresthaRaju/next-stripe/blob/main/utils/postRequest.ts
export const postRequest = async (url: string, data?: {}) => {
  try {
      // Default options are marked with *
      const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data || {}), // body data type must match "Content-Type" header
      })
      console.log("Stripe postRequest response: ",  response)
      return await response.json() // parses JSON response into native JavaScript objects
  } catch (err) {
    console.log("Stripe postRequest error: ", err)
      if (err instanceof Error) {
          throw new Error(err.message)
      }
      throw err
  }
}