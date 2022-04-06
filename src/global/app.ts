export default async () => {
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */

  let baseURL = '/'
  if(location.href.match('github') !== null){
    baseURL = "https://positlabs.github.io/lightpaintlive-www/"
  }
  const base = document.createElement('base')
  document.body.appendChild(base)
  base.href = baseURL 

};
